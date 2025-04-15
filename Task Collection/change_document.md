# Task: Document implemented changes

## Description
Create comprehensive documentation of changes made to your Databutton application. This task produces a detailed record of what was changed, why it was changed, and the impact of those changes for future reference, knowledge sharing, and maintenance.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` to identify modified components
2. Use `read_code` to examine the implemented changes
3. Use `search_code` to find affected areas
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "change-documentation",
    "taskName": "Change Documentation: [Feature/Component]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "major-feature|enhancement|bugfix|refactoring",
    "metrics": {
      "filesModified": 0,
      "linesAdded": 0,
      "linesRemoved": 0,
      "componentsAffected": 0
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
      "title": "Change Impact Flow",
      "description": "Visual representation of components affected by the changes",
      "content": "graph TD\n    A[Modified Component] --> B[Dependent Component 1]\n    A --> C[Dependent Component 2]\n    B --> D[User Experience]\n    C --> E[API Interaction]\n    style A fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Before vs After Flow",
      "description": "Comparison of workflow before and after changes",
      "content": "graph TD\n    subgraph \"Before Change\"\n        A1[Step 1] --> B1[Step 2]\n        B1 --> C1[Step 3]\n    end\n    subgraph \"After Change\"\n        A2[Step 1] --> B2[Modified Step 2]\n        B2 --> C2[New Step]\n        C2 --> D2[Step 3]\n    end\n    style B2 fill:#f55,stroke:#333,stroke-width:2px\n    style C2 fill:#f55,stroke:#333,stroke-width:2px"
    }
  ],
  "sections": [
    {
      "title": "Overview",
      "priority": 1,
      "content": "### Feature/Area\n[What was modified]\n\n### Change Date\n[When changes were implemented]\n\n### Change Type\n[Bug fix/Enhancement/Refactoring/etc.]\n\n### Change Summary\n[Brief description of what was changed]"
    },
    {
      "title": "Problem Statement",
      "priority": 2,
      "content": "[Detailed description of the issue or requirement that prompted these changes, including context, impact, and urgency]"
    },
    {
      "title": "Solution Implemented",
      "priority": 3,
      "content": "[Comprehensive explanation of the approach taken to address the problem, including design decisions, alternatives considered, and rationale for the chosen solution]"
    },
    {
      "title": "Technical Details",
      "priority": 4,
      "content": "### Modified Components\n| Component | File Path | Nature of Change | Purpose |\n|-----------|-----------|------------------|---------|\n| [Component name] | `[file path]` | [What changed] | [Why it changed] |\n| [Component name] | `[file path]` | [What changed] | [Why it changed] |\n\n### Code Changes\n```jsx\n// File: [filename]\n// Before:\n[Previous code]\n\n// After:\n[New code]\n```\n\n**Explanation:**\n[Why this specific change was made]\n\n### Architecture Changes\n- [Any changes to system architecture]\n- [New patterns or approaches introduced]\n- [Modified data flows or component relationships]"
    },
    {
      "title": "API Changes",
      "priority": 5,
      "content": "| Endpoint | Change Type | Before | After | Migration Notes |\n|----------|-------------|--------|-------|----------------|\n| [Endpoint] | [Added/Modified/Removed] | [Previous state] | [New state] | [How to adapt] |\n| [Endpoint] | [Added/Modified/Removed] | [Previous state] | [New state] | [How to adapt] |"
    },
    {
      "title": "Testing Performed",
      "priority": 6,
      "content": "### Test Scenarios\n[List of test cases executed]\n\n### Edge Cases Covered\n[Boundary conditions tested]\n\n### Results\n[Summary of test results]\n\n### Verification Methods\n[How the changes were verified]"
    },
    {
      "title": "Deployment Notes",
      "priority": 7,
      "content": "### Deployment Process\n[How changes were deployed]\n\n### Configuration Changes\n[Any configuration updates
