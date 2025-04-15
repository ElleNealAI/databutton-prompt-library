# Task: Analyze user experience gaps in application

## Description
Identify disconnects between user expectations and your application's implementation. Analyze friction points in user journeys, document mental model mismatches, and provide recommendations to improve the overall user experience.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` and `read_code` to examine UI components and interaction logic
2. Use `search_code` to find implementation patterns related to the specified feature/workflow
3. Analyze the user journey steps and identify points of potential confusion or frustration
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "ux-gap-analysis",
    "taskName": "UX Gap Analysis: [Feature/Workflow]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "significant-gaps|moderate-issues|minor-improvements",
    "metrics": {
      "totalGapsIdentified": 0,
      "criticalFrictionPoints": 0,
      "majorImprovementAreas": 0
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
      "title": "User Journey Friction Map",
      "description": "Visual map of user journey with friction points highlighted",
      "content": "graph TD\n    A[Start] --> B[Step 1]\n    B --> C[Step 2]\n    C --> D{Decision Point}\n    D -->|Option 1| E[Step 3A]\n    D -->|Option 2| F[Step 3B]\n    E --> G[Complete]\n    F --> G\n    style C fill:#f55,stroke:#333,stroke-width:2px\n    style D fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "mindmap",
      "title": "Mental Model Comparison",
      "description": "Comparison of user mental model vs. system implementation",
      "content": "mindmap\n  root(Feature X)\n    User Expectations\n      Simple Process\n      Immediate Feedback\n      Clear Options\n    System Implementation\n      Multi-step Process\n      Delayed Confirmation\n      Hidden Options"
    }
  ],
  "sections": [
    {
      "title": "User Expectations vs. Implementation",
      "priority": 1,
      "content": "| User Expectation | Current Implementation | Gap Analysis | Impact on User |\n|------------------|------------------------|--------------|----------------|\n| [What users expect] | [What actually happens] | [Nature of mismatch] | [How it affects users] |\n| [What users expect] | [What actually happens] | [Nature of mismatch] | [How it affects users] |"
    },
    {
      "title": "User Journey Friction Map",
      "priority": 2,
      "content": "### Step 1: [Step Name]\n- **User Goal**: [What user wants to accomplish]\n- **Current Experience**: [What happens now]\n- **Friction Points**: [Where users get confused/frustrated]\n- **Improvement Opportunity**: [How to reduce friction]\n\n### Step 2: [Step Name]\n- **User Goal**: [What user wants to accomplish]\n- **Current Experience**: [What happens now]\n- **Friction Points**: [Where users get confused/frustrated]\n- **Improvement Opportunity**: [How to reduce friction]"
    },
    {
      "title": "Mental Model Analysis",
      "priority": 3,
      "content": "### User Mental Model\n[Description of how users think the feature works]\n\n### System Implementation\n[Description of how it actually works]\n\n### Alignment Gaps\n[Explanation of where these models don't match]\n\n### Alignment Solutions\n[Strategies to bring these models closer together]"
    },
    {
      "title": "Usability Principles Assessment",
      "priority": 4,
      "content": "### Visibility of System Status\n- **Current Implementation**: [How system status is shown]\n- **Gaps**: [Issues with status visibility]\n- **Recommendations**: [How to improve]\n\n### Match Between System and Real World\n- **Current Implementation**: [How well terminology matches users' language]\n- **Gaps**: [Mismatches in language/concepts]\n- **Recommendations**: [How to improve]\n\n### User Control and Freedom\n- **Current Implementation**: [How much control users have]\n- **Gaps**: [Where users feel trapped]\n- **Recommendations**: [How to improve]\n\n### Error Prevention and Recovery\n- **Current Implementation**: [How errors are prevented/handled]\n- **Gaps**: [Issues with error handling]\n- **Recommendations**: [How to improve]"
    },
    {
      "title": "Visual Design and Information Architecture",
      "priority": 5,
      "content": "### Layout Issues\n[Problems with visual organization]\n\n### Information Hierarchy\n[Issues with content prioritization]\n\n### Visual Feedback\n[Problems with interaction feedback]\n\n### Recommendations\n[How to improve visual aspects]"
    },
    {
      "title": "Accessibility Considerations",
      "priority": 6,
      "content": "### Current Accessibility\n[State of accessibility]\n\n### WCAG Compliance Gaps\n[Where accessibility falls short]\n\n### Recommendations\n[How to improve accessibility]"
    },
    {
      "title": "UI Code Analysis",
      "priority": 7,
      "content": "```jsx\n// Example of problematic UI implementation\n[code snippet]\n// Issues: [explanation of UX issues in the code]\n```\n\n```jsx\n// Example of improved UI implementation\n[improved code snippet]\n// Benefits: [explanation of UX improvements]\n```"
    }
  ],
  "actions": [
    {
      "title": "Improve feedback in [Component/Step]",
      "description": "Add visual confirmation and status indicators to reduce user uncertainty",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Simplify workflow in [Feature]",
      "description": "Reduce steps and provide clearer guidance to match user expectations",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/UserFlow.jsx",
      "description": "Component implementing the user workflow"
    },
    {
      "type": "file",
      "path": "src/styles/feedback.css",
      "description": "Styles related to user feedback"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- Key user expectations have been documented and compared to current implementation
- The complete user journey has been mapped with friction points identified
- Mental model gaps between user expectations and system implementation have been analyzed
- Usability principles have been systematically assessed
- Visual design and information architecture issues have been identified
- Accessibility considerations have been documented
- UI code examples showing problematic and improved implementations have been provided
- A user journey friction map has been created using mermaid
- A mental model comparison diagram has been created using mermaid
- A prioritized improvement plan has been developed
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A user journey friction map highlighting pain points
   - A mental model comparison showing expectation vs. implementation
3. A written summary with overall UX assessment
4. UI code examples showing both problematic and improved implementations
5. A prioritized action plan for UX improvements
