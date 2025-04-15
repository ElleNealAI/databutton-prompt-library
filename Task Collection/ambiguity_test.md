Title: Identify ambiguities in feature requirements

Description:
Analyze the current feature requirements to identify unclear, ambiguous, or missing information that could lead to implementation issues. Create a comprehensive report that highlights areas needing clarification.

Using the Databutton agent tools, follow these steps:
1. Use read_tasks to examine the feature requirements task (provide the task ID)
2. Use search_code to find any related implementation code if this feature has partial implementation
3. Systematically analyze requirements across 8 key categories (Goal Clarity, Scope Boundaries, Technical Requirements, Data Requirements, Integration Points, User Experience, Testing & Validation, Process Requirements)
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```
{
  "taskMetadata": {
    "taskType": "ambiguity-test",
    "taskName": "Ambiguity Analysis: [Feature Name]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "proceed|seek-clarification|critical-issues",
    "metrics": {
      "totalAmbiguitiesFound": 0,
      "categoriesWithIssues": 0,
      "criticalCategories": 0
    },
    "keyFindings": [
      "Key finding 1",
      "Key finding 2",
      "Key finding 3"
    ]
  },
  "visualizations": [
    {
      "type": "mermaid",
      "subtype": "mindmap",
      "title": "Ambiguity Overview",
      "description": "Mind map of ambiguity categories and issues",
      "content": "mindmap\n  root(Feature Name\\nAmbiguities)\n    Goal Clarity\n      Issue 1\n      Issue 2\n    Technical Requirements\n      Issue 3\n      Issue 4\n    ..."
    },
    {
      "type": "mermaid",
      "subtype": "graph",
      "title": "Severity Assessment",
      "description": "Visualization of issue severity by category",
      "content": "graph TD\n    subgraph \"Critical Issues\"\n        A[\"Technical Requirements<br/>⚠️ High Severity\"] \n        B[\"Data Requirements<br/>⚠️ High Severity\"]\n    end\n    subgraph \"Medium Issues\"\n        C[\"Goal Clarity<br/>⚡ Medium Severity\"]\n        D[\"Scope Boundaries<br/>⚡ Medium Severity\"]\n    end\n    subgraph \"Minor Issues\"\n        E[\"Testing & Validation<br/>✓ Low Severity\"]\n    end"
    }
  ],
  "sections": [
    {
      "title": "Goal Clarity",
      "priority": 1,
      "content": "### Ambiguities Identified\n- [List ambiguities if any]\n\n### Clarifying Questions\n- [List questions]\n\n### Severity: high|medium|low"
    },
    {
      "title": "Scope Boundaries",
      "priority": 2,
      "content": "### Ambiguities Identified\n- [List ambiguities if any]\n\n### Clarifying Questions\n- [List questions]\n\n### Severity: high|medium|low"
    },
    {
      "title": "Technical Requirements",
      "priority": 3,
      "content": "..."
    },
    {
      "title": "Data Requirements",
      "priority": 4,
      "content": "..."
    },
    {
      "title": "Integration Points",
      "priority": 5,
      "content": "..."
    },
    {
      "title": "User Experience",
      "priority": 6,
      "content": "..."
    },
    {
      "title": "Testing & Validation",
      "priority": 7,
      "content": "..."
    },
    {
      "title": "Process Requirements",
      "priority": 8,
      "content": "..."
    }
  ],
  "actions": [
    {
      "title": "Seek clarification on goal definition",
      "description": "Ask product owner to define success criteria more precisely",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "task",
      "path": "TASK-123",
      "description": "Original requirements task"
    }
  ]
}
```
After generating the JSON, use the test_endpoint tool to save it to storage:
- Endpoint name: save_task_result_endpoint
- Request body: { "task_data": YOUR_JSON_OBJECT }

Definition of Done:
- All 8 ambiguity categories have been systematically analyzed
- Specific ambiguities are identified with clear explanations
- Clarifying questions are provided for each ambiguity
- A severity assessment is included for each category
- A recommendation on whether to proceed or seek clarification is provided
- A mind map visualization shows ambiguity categories and key issues
- A severity visualization groups issues by impact level
- A clear set of next actions has been provided based on findings
- The JSON has been successfully saved using the task API endpoint

Output Format:
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A mind map showing ambiguity categories and key issues
   - A graph showing severity groupings
3. A written summary with an overall recommendation (proceed, seek clarification, critical issues)
4. Prioritized list of questions that need to be answered before implementation
