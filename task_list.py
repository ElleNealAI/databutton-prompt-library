import databutton as db
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
import json
import requests
import re
from datetime import datetime
from typing import Dict, List, Optional, Any


# Define the router
router = APIRouter(prefix="/tasks", tags=["tasks"])

# --- Constants ---
GITHUB_REPO_URL = "https://api.github.com/repos/ElleNealAI/databutton-prompt-library/contents/Task%20Collection"
TASK_COLLECTION_JSON = "task_collection.json"
ALL_TASKS_KEY = "all_task_results.json"

# --- Pydantic Models for Task Templates ---
class URLExtractionRequest(BaseModel):
    url: str = Field(..., description="The URL to fetch content from. For GitHub folders, use 'github:folder_path'")

class URLExtractionResponse(BaseModel):
    content: Dict[str, str] | None = Field(None, description="Dictionary of filename to content")
    error: str | None = Field(None, description="Error message if fetching failed")
    file_count: int = Field(0, description="Number of files processed")

# --- Pydantic Models for Task Results ---
class TaskDataRequest(BaseModel):
    task_data: Dict[str, Any] = Field(..., description="The full task data object")

class TaskMetadata(BaseModel):
    taskType: str
    taskName: str
    createdAt: str

class TaskSummary(BaseModel):
    overallStatus: str

class ExpectedTaskStructure(BaseModel):
    """Defines the expected nested structure for validation/extraction"""
    taskMetadata: TaskMetadata
    summary: TaskSummary

class SaveTaskResponse(BaseModel):
    status: str
    task_id: str

class TasksResponse(BaseModel):
    tasks: List[Dict[str, Any]] = Field(..., description="All stored task results")

# --- Helper Functions for GitHub Integration ---
def fetch_github_folder_contents(folder_url=GITHUB_REPO_URL):
    """
    Fetches all files from a GitHub folder using the GitHub API
    and returns a dictionary of filename to file content.
    """
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Databutton-Task-Collector"
    }
    
    try:
        # Get the list of files in the folder
        response = requests.get(folder_url, headers=headers, timeout=10)
        response.raise_for_status()
        
        files_data = response.json()
        file_contents = {}
        
        # Process each file in the folder
        for file_info in files_data:
            # Skip directories and non-markdown files
            if file_info["type"] != "file" or not file_info["name"].endswith(".md"):
                continue
                
            # Get file content
            content_response = requests.get(file_info["download_url"], headers=headers, timeout=10)
            content_response.raise_for_status()
            
            # Save filename and content
            file_contents[file_info["name"]] = content_response.text
        
        return file_contents, None  # Success
        
    except requests.exceptions.RequestException as e:
        error_message = f"GitHub API error: {str(e)}"
        return None, error_message
    except Exception as e:
        error_message = f"Unexpected error: {str(e)}"
        return None, error_message

# --- API Endpoints for Task Templates ---
@router.post("/extract-github-tasks", response_model=URLExtractionResponse)
def extract_github_tasks():
    """
    Fetches all task templates from the GitHub repository's Task Collection folder
    and saves them as a single JSON file with filename and content.
    """
    print(f"Fetching task templates from GitHub folder: {GITHUB_REPO_URL}")

    try:
        # Fetch files from GitHub
        file_contents, error = fetch_github_folder_contents()
        
        if error:
            print(f"Error fetching GitHub content: {error}")
            return URLExtractionResponse(error=error)
        
        # Save to Databutton storage
        db.storage.json.put(value=file_contents, key=TASK_COLLECTION_JSON)
        
        file_count = len(file_contents)
        print(f"Successfully saved {file_count} task templates to {TASK_COLLECTION_JSON}")
        
        return URLExtractionResponse(
            content=file_contents,
            file_count=file_count
        )
        
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        print(error_message)
        return URLExtractionResponse(error=error_message)


@router.get("/task-templates", response_model=Dict[str, str])
def get_task_templates():
    """
    Retrieves the stored task templates.
    """
    try:
        # Get stored templates
        templates = db.storage.json.get(key=TASK_COLLECTION_JSON, default={})
        print(f"Retrieved {len(templates)} stored task templates")
        return templates
        
    except Exception as e:
        print(f"Error retrieving task templates: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to retrieve task templates: {str(e)}")

# --- API Endpoints for Task Results ---
@router.post("/save-result", response_model=SaveTaskResponse)
def save_task_result_endpoint(request: TaskDataRequest):
    """
    Saves a task result by appending it to a single JSON file containing all tasks.
    """
    task_data = request.task_data
    print(f"Received task data request. Keys: {list(task_data.keys())}")

    # --- Validate and Extract Metadata ---
    try:
        validated_structure = ExpectedTaskStructure(**task_data)
        task_type = validated_structure.taskMetadata.taskType
        task_name = validated_structure.taskMetadata.taskName
        created_at = validated_structure.taskMetadata.createdAt
        overall_status = validated_structure.summary.overallStatus
        print(f"Extracted Metadata - Type: {task_type}, Name: {task_name}, Created: {created_at}, Status: {overall_status}")
    except Exception as e:
        print(f"Validation/Extraction Error: {e}")
        raise HTTPException(
            status_code=400,
            detail=f"Invalid or missing task data structure. Required: taskMetadata(taskType, taskName, createdAt), summary(overallStatus). Error: {e}"
        ) from e

    # --- Generate Task ID ---
    timestamp_str = datetime.now().strftime('%Y%m%d_%H%M%S_%f')
    safe_task_type = re.sub(r'[^a-zA-Z0-9_-]', '', task_type)
    task_id = f"{safe_task_type}_{timestamp_str}"
    
    # Add the ID to the task data for reference
    task_data["taskId"] = task_id
    
    # --- Retrieve existing tasks or create new list ---
    try:
        all_tasks = db.storage.json.get(key=ALL_TASKS_KEY, default=[])
        print(f"Retrieved existing tasks file. Current tasks: {len(all_tasks)}")
        
        # Add the new task to the list
        all_tasks.append(task_data)
        
        # Save the updated list back to storage
        db.storage.json.put(value=all_tasks, key=ALL_TASKS_KEY)
        print(f"Successfully updated tasks file with new task. Total tasks: {len(all_tasks)}")
        
        return SaveTaskResponse(
            status="success",
            task_id=task_id
        )
    except Exception as e:
        print(f"Error updating tasks file: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to save task result: {str(e)}") from e

@router.get("/results", response_model=TasksResponse)
def get_all_tasks():
    """
    Fetches all task results from the single storage file.
    """
    try:
        all_tasks = db.storage.json.get(key=ALL_TASKS_KEY, default=[])
        print(f"Successfully retrieved tasks file. Tasks found: {len(all_tasks)}")
        return TasksResponse(tasks=all_tasks)
    except Exception as e:
        print(f"Error reading tasks file: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to retrieve task results: {str(e)}") from e

# --- Extended API Endpoints ---
@router.get("/result/{task_id}", response_model=Dict[str, Any])
def get_task_by_id(task_id: str):
    """
    Retrieves a specific task result by its ID.
    """
    try:
        all_tasks = db.storage.json.get(key=ALL_TASKS_KEY, default=[])
        
        # Find the task with the matching ID
        for task in all_tasks:
            if task.get("taskId") == task_id:
                return task
                
        # If no task is found, raise an error
        raise HTTPException(status_code=404, detail=f"Task with ID {task_id} not found")
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error retrieving task by ID: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to retrieve task: {str(e)}")

@router.get("/templates-by-type/{task_type}")
def get_templates_by_type(task_type: str):
    """
    Retrieves task templates filtered by task type (looks for task_type in the filename).
    """
    try:
        templates = db.storage.json.get(key=TASK_COLLECTION_JSON, default={})
        
        # Filter templates by task type (assuming filename contains task type)
        filtered_templates = {
            filename: content for filename, content in templates.items()
            if task_type.lower() in filename.lower()
        }
        
        if not filtered_templates:
            return {"message": f"No templates found for task type: {task_type}", "templates": {}}
            
        return {"templates": filtered_templates, "count": len(filtered_templates)}
        
    except Exception as e:
        print(f"Error retrieving templates by type: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to retrieve templates: {str(e)}")

@router.post("/refresh-templates")
def refresh_templates():
    """
    Forces a refresh of the task templates from GitHub.
    """
    return extract_github_tasks()
