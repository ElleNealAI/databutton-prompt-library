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
      "content": "### Deployment Process\n[How changes were deployed]\n\n### Configuration Changes\n[Any configuration updates required]\n\n### Dependencies\n[New or modified dependencies]\n\n### Rollback Procedure\n[How to revert if necessary]"
    },
    {
      "title": "User Impact",
      "priority": 8,
      "content": "### UI Changes\n[Any visual or interaction changes]\n\n### Workflow Changes\n[How user processes are affected]\n\n### Performance Impact\n[Any changes to response times or resource usage]\n\n### Accessibility Impact\n[How accessibility is affected by the changes]"
    },
    {
      "title": "Known Limitations",
      "priority": 9,
      "content": "### Current Limitations\n[Any remaining issues or constraints]\n\n### Workarounds\n[Workarounds for known limitations]\n\n### Open Issues\n[Issues discovered but not addressed in this change]"
    },
    {
      "title": "Future Considerations",
      "priority": 10,
      "content": "### Potential Enhancements\n[Possible future improvements]\n\n### Technical Debt\n[Technical debt addressed or created]\n\n### Maintenance Notes\n[Special considerations for future maintenance]"
    }
  ],
  "actions": [
    {
      "title": "Update user documentation",
      "description": "Ensure user documentation reflects the new changes and workflows",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Monitor performance",
      "description": "Track performance metrics after deployment to verify no regressions",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Address known limitations",
      "description": "Plan for resolving open issues and limitations in future updates",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Provide training for team members",
      "description": "Ensure all team members understand the changes and implementation details",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "task",
      "path": "TASK-123",
      "description": "Original issue or feature request"
    },
    {
      "type": "file",
      "path": "src/components/ModifiedComponent.jsx",
      "description": "Component that was modified"
    },
    {
      "type": "file", 
      "path": "src/services/ChangedService.js",
      "description": "Service that was updated"
    },
    {
      "type": "documentation",
      "path": "docs/features/feature-name.md",
      "description": "Related documentation"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A comprehensive overview of the changes has been documented
- The original problem and solution approach have been clearly explained
- All modified components have been identified with file paths
- Specific code changes have been documented with before/after examples
- API changes have been cataloged if applicable
- Testing performed has been described in detail
- Deployment and configuration details have been recorded
- User impact has been assessed
- Known limitations have been documented
- Future considerations have been identified
- A change impact flow diagram has been created using mermaid
- A before/after workflow diagram has been created using mermaid
- A prioritized set of follow-up actions has been defined
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the change documentation (saved via API)
2. At least two mermaid visualizations:
   - A change impact flow showing affected components
   - A before/after workflow comparison
3. Comprehensive documentation of all technical changes
4. Specific code examples showing both the previous and new implementation
5. Clear explanation of the problem and implemented solution
6. Documentation of user impact and any necessary training or communication
