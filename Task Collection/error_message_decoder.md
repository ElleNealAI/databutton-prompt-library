# Task: Decode and explain application error messages

## Description
Analyze error messages from your Databutton application to determine their meaning, identify their source, provide a clear explanation in plain language, and deliver actionable solutions to resolve the underlying issues.

Using the Databutton agent tools, follow these steps:
1. Use `search_code` to find relevant code segments where the error might originate
2. Use `read_code` to examine error handling patterns and implementations
3. Analyze the error message structure, context, and technical implications
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "error-decoder",
    "taskName": "Error Analysis: [Brief Error Description]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "actionable|needs-investigation|system-error",
    "metrics": {
      "errorSeverity": "critical|high|medium|low",
      "estimatedFixComplexity": "simple|moderate|complex"
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
      "title": "Error Origin Trace",
      "description": "Visual trace of the error's path through the application",
      "content": "graph TD\n    A[User Action] --> B[Component X]\n    B --> C[Function Y]\n    C --> D{Error Check}\n    D -->|Failure| E[Error Thrown]\n    E --> F[Error Handler]\n    F --> G[UI Error Message]\n    style E fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "graph",
      "title": "Solution Implementation Map",
      "description": "Steps to resolve the error",
      "content": "graph LR\n    A[Identify Error Location] --> B[Fix Root Cause]\n    B --> C[Add Error Prevention]\n    C --> D[Update Error Handling]\n    D --> E[Test Fix]"
    }
  ],
  "sections": [
    {
      "title": "Error Summary",
      "priority": 1,
      "content": "### Error Message\n```\n[Exact error message]\n```\n\n### Non-Technical Explanation\n[Clear, plain-language explanation of what this error means]\n\n### Impact\n[How this error affects users or system operation]"
    },
    {
      "title": "Technical Details",
      "priority": 2,
      "content": "### Error Type\n[Classification of the error]\n\n### Component\n[Which part of the system generated the error]\n\n### Context\n[When/where this error occurs]\n\n### Stack Trace Analysis\n[Breakdown of key information from stack trace if available]"
    },
    {
      "title": "Root Cause",
      "priority": 3,
      "content": "### Primary Cause\n[Explanation of what's directly causing this error]\n\n### Contributing Factors\n[Other issues that may have led to this situation]\n\n### Code Analysis\n```jsx\n// Problematic code snippet with comments\n```"
    },
    {
      "title": "Solution Steps",
      "priority": 4,
      "content": "### Immediate Fix\n[Step-by-step instructions to resolve the error]\n\n### Code Solution\n```jsx\n// Fixed code example\n```\n\n### Verification Steps\n[How to confirm the error is resolved]"
    },
    {
      "title": "Prevention Strategies",
      "priority": 5,
      "content": "### Error Handling Improvements\n[Suggestions for better error handling]\n\n### Validation Enhancements\n[Input/state validation to prevent recurrence]\n\n### Testing Recommendations\n[Test cases to catch this type of error]"
    }
  ],
  "actions": [
    {
      "title": "Fix error handling in [Component]",
      "description": "Update the error handling to properly catch and process this error type",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Add validation for [input/process]",
      "description": "Implement input validation to prevent the error from occurring",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/Example.jsx",
      "description": "Component where error originates"
    },
    {
      "type": "documentation",
      "path": "https://example-library.docs/errors",
      "description": "External documentation about this error type"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- Error message has been analyzed and translated into plain language
- The root cause has been identified with specific file and code references
- Step-by-step solution instructions have been provided
- Prevention strategies have been suggested to avoid future occurrences
- A visual error trace diagram has been created using mermaid
- A solution implementation map has been created using mermaid
- A complete set of actionable items has been developed
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - An error trace diagram showing how the error propagates
   - A solution implementation map showing fix steps
3. A written summary with plain-language explanation
4. Code examples showing both the issue and the solution
5. A prioritized action plan for fixing the error
