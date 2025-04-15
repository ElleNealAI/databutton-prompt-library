# Task: Create structured debugging task

## Description
Transform problem analysis into an actionable, structured debugging task. This task synthesizes findings from previous analysis tasks (from IDENTIFY and DEFINE phases) to create a clear, step-by-step plan for resolving an identified issue.

Using the Databutton agent tools, follow these steps:
1. Use `list_tasks` and `read_tasks` to examine previous analysis tasks
2. Use `search_code` to understand the code context of the issue
3. Develop a structured debugging plan with clear steps
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "debugging-task",
    "taskName": "Debug: [Clear Description of Issue]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "well-defined|needs-investigation|complex-problem",
    "metrics": {
      "stepsIdentified": 0,
      "filesAffected": 0,
      "estimatedEffort": "minor|moderate|significant"
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
      "subtype": "flowchart",
      "title": "Debugging Process Flow",
      "description": "Sequential steps to debug and fix the issue",
      "content": "graph TD\n    A[Reproduce Issue] --> B[Isolate Cause]\n    B --> C[Implement Fix]\n    C --> D[Verify Solution]\n    D --> E[Regression Test]\n    style B fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "graph",
      "title": "Component Interactions in Issue",
      "description": "Components involved in the bug and their interactions",
      "content": "graph LR\n    A[User Input] --> B[Component X]\n    B --> C[Service Y]\n    C --> D[API Call]\n    D --> E[Data Processing]\n    style C fill:#f55,stroke:#333,stroke-width:2px\n    style D fill:#f55,stroke:#333,stroke-width:2px"
    }
  ],
  "sections": [
    {
      "title": "Issue Summary",
      "priority": 1,
      "content": "[1-2 paragraphs summarizing the problem, its impact, when it occurs, and its severity]"
    },
    {
      "title": "Analysis Findings",
      "priority": 2,
      "content": "### Root Cause\n[The identified source of the problem based on previous analysis]\n\n### Affected Components\n- `[Component 1]`: [How it's involved]\n- `[Component 2]`: [How it's involved]\n\n### Related Issues\n[Any connected problems or dependencies]\n\n### Priority\n[High/Medium/Low based on impact and urgency with justification]"
    },
    {
      "title": "Reproduction Steps",
      "priority": 3,
      "content": "1. [Precise step to reproduce]\n2. [Precise step to reproduce]\n3. [etc.]"
    },
    {
      "title": "Expected vs. Actual Behavior",
      "priority": 4,
      "content": "### Expected Behavior\n[What should happen when functioning correctly]\n\n### Actual Behavior\n[What currently happens]\n\n### Error Messages/Logs\n```\n[Exact error messages if applicable]\n```"
    },
    {
      "title": "Technical Context",
      "priority": 5,
      "content": "### Files Involved\n- `[filename1]`: [Brief description of role]\n- `[filename2]`: [Brief description of role]\n\n### State/Data Flow\n[Relevant state or data flow information]\n\n### External Dependencies\n[Any third-party libraries or services involved]"
    },
    {
      "title": "Fix Implementation Plan",
      "priority": 6,
      "content": "### Step 1: [Brief description]\n- **Action**: [Specific code change or action]\n- **Files to Modify**: `[filename]`\n- **Purpose**: [What this change addresses]\n- **Verification**: [How to verify this change works]\n\n### Step 2: [Brief description]\n- **Action**: [Specific code change or action]\n- **Files to Modify**: `[filename]`\n- **Purpose**: [What this change addresses]\n- **Verification**: [How to verify this change works]\n\n### Step 3: [Brief description]\n[Same structure as above]"
    },
    {
      "title": "Code Implementation",
      "priority": 7,
      "content": "### Change 1: [Brief description]\n```jsx\n// Before: Current problematic code\n[code snippet]\n\n// After: Fixed implementation\n[code snippet]\n\n// Explanation:\n[Why this change fixes the issue]\n```\n\n### Change 2: [Brief description]\n[Same structure as above]"
    },
    {
      "title": "Testing Instructions",
      "priority": 8,
      "content": "1. **Verification Test**: [Description]\n   - **Steps**: [How to perform the test]\n   - **Expected Result**: [What should happen]\n\n2. **Edge Case Test**: [Description]\n   - **Steps**: [How to perform the test]\n   - **Expected Result**: [What should happen]\n\n3. **Regression Test**: [Description]\n   - **Steps**: [How to perform the test]\n   - **Expected Result**: [What should happen]"
    },
    {
      "title": "Rollback Plan",
      "priority": 9,
      "content": "[Detailed steps to revert changes if issues arise]"
    },
    {
      "title": "Follow-up Tasks",
      "priority": 10,
      "content": "- [Additional work needed after this fix]\n- [Potential improvements beyond the immediate fix]\n- [Any technical debt that should be addressed later]"
    }
  ],
  "actions": [
    {
      "title": "Modify [specific component/file]",
      "description": "Implement specific code changes to fix the root cause",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Add tests for [scenario]",
      "description": "Create specific tests to verify the fix and prevent regression",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Update documentation for [feature]",
      "description": "Ensure documentation reflects the fixed behavior",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "task",
      "path": "TASK-123",
      "description": "Original analysis task"
    },
    {
      "type": "file",
      "path": "src/components/BuggyComponent.jsx",
      "description": "Component containing the bug"
    },
    {
      "type": "file", 
      "path": "src/services/AffectedService.js",
      "description": "Service involved in the issue"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A clear issue summary has been created based on previous analysis
- The root cause and affected components have been identified
- Precise reproduction steps have been documented
- Expected and actual behavior have been clearly differentiated
- All relevant files and technical context have been documented
- A step-by-step implementation plan has been created
- Specific code changes have been proposed with before/after examples
- Comprehensive testing instructions have been provided
- A rollback plan has been established
- Potential follow-up tasks have been identified
- A debugging process flow diagram has been created using mermaid
- A component interaction diagram has been created using mermaid
- A prioritized action plan has been developed
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the debugging task (saved via API)
2. At least two mermaid visualizations:
   - A debugging process flow showing the fix steps
   - A component interaction diagram showing affected parts
3. A comprehensive issue description with reproduction steps
4. A detailed implementation plan with specific code changes
5. Clear testing instructions to verify the fix
6. A rollback plan and follow-up tasks
