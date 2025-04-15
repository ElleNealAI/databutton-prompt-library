# Task: Conduct systematic root cause analysis using 5 Whys technique

## Description
Systematically analyze a problem or issue in your Databutton application to trace surface-level symptoms to their underlying root causes. Apply the "5 Whys" technique to identify fundamental issues rather than treating symptoms, and develop a comprehensive action plan to address the core problems.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` and `read_code` to examine relevant application components
2. Use `search_code` to find implementation details related to the issue
3. Apply the "5 Whys" technique to trace the issue to its root cause
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "root-cause-analysis",
    "taskName": "Root Cause Analysis: [Brief Problem Description]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "root-cause-identified|multiple-causes|needs-further-investigation",
    "metrics": {
      "whyLevelsExplored": 0,
      "potentialCauses": 0,
      "verificationTestsCreated": 0
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
      "subtype": "graph",
      "title": "Cause-Effect Chain",
      "description": "Visual representation of the causal chain from symptom to root cause",
      "content": "graph TD\n    A[Symptom: Issue Description] --> B[Why? First-level cause]\n    B --> C[Why? Second-level cause]\n    C --> D[Why? Third-level cause]\n    D --> E[Why? Fourth-level cause]\n    E --> F[Why? Fifth-level cause]\n    F --> G[Root Cause]\n    style G fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Solution Implementation Path",
      "description": "Steps to address root cause and preventive measures",
      "content": "graph LR\n    A[Identify Root Cause] --> B[Immediate Fix]\n    B --> C[Verification]\n    C --> D[System Improvement]\n    D --> E[Prevention Measures]"
    }
  ],
  "sections": [
    {
      "title": "Problem Statement",
      "priority": 1,
      "content": "[Clear definition of the observed problem/symptom with details on impact, frequency, and context]"
    },
    {
      "title": "5 Whys Analysis",
      "priority": 2,
      "content": "1. **Symptom**: [Initial problem description]\n   * **Why?**: [First-level questioning]\n   * **Evidence**: [Supporting evidence/observations]\n   \n2. **Cause Level 1**: [Finding from first why]\n   * **Why?**: [Second-level questioning]\n   * **Evidence**: [Supporting evidence/observations]\n   \n3. **Cause Level 2**: [Finding from second why]\n   * **Why?**: [Third-level questioning]\n   * **Evidence**: [Supporting evidence/observations]\n   \n4. **Cause Level 3**: [Finding from third why]\n   * **Why?**: [Fourth-level questioning]\n   * **Evidence**: [Supporting evidence/observations]\n   \n5. **Cause Level 4**: [Finding from fourth why]\n   * **Why?**: [Fifth-level questioning]\n   * **Evidence**: [Supporting evidence/observations]\n   \n6. **Root Cause**: [Ultimate underlying cause]\n   * **Evidence**: [Final supporting evidence]"
    },
    {
      "title": "Alternative Causal Paths",
      "priority": 3,
      "content": "### Alternative Path 1\n[Description of another potential causal chain if applicable]\n\n### Alternative Path 2\n[Description of another potential causal chain if applicable]\n\n### Evaluation\n[Analysis of the likelihood of each causal path being the true root cause]"
    },
    {
      "title": "Verification Tests",
      "priority": 4,
      "content": "### Test 1: [Test Name]\n- **Purpose**: [What this test verifies]\n- **Method**: [How to perform the test]\n- **Expected Result**: [What outcome confirms the hypothesis]\n- **Code Sample**:\n```jsx\n// Verification test code\n```\n\n### Test 2: [Test Name]\n- [Same structure as above]"
    },
    {
      "title": "Solution Plan",
      "priority": 5,
      "content": "### Immediate Actions\n1. [First action to address root cause]\n2. [Second action to address root cause]\n\n### Implementation Details\n```jsx\n// Code example of the solution\n```\n\n### Verification Approach\n[How to verify the solution resolves the original problem]"
    },
    {
      "title": "System-Level Improvements",
      "priority": 6,
      "content": "### Process Improvements\n[Recommendations for process changes to prevent similar issues]\n\n### Architectural Enhancements\n[Suggestions for structural improvements]\n\n### Monitoring & Detection\n[Methods to detect similar issues earlier in the future]"
    }
  ],
  "actions": [
    {
      "title": "Fix [specific root cause]",
      "description": "Implement specific changes to address the identified root cause",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Implement [system improvement]",
      "description": "Make system-level changes to prevent recurrence",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Add [verification mechanism]",
      "description": "Create tests or monitoring to verify fix and catch future issues",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/ProblemComponent.jsx",
      "description": "Component where issue manifests"
    },
    {
      "type": "file",
      "path": "src/services/affectedService.js",
      "description": "Service containing root cause"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A clear problem statement has been formulated with specific details
- The 5 Whys technique has been systematically applied with evidence at each level
- Alternative causal paths have been considered if applicable
- Specific verification tests have been designed to confirm the root cause
- A detailed solution plan has been developed addressing the root cause
- System-level improvements have been recommended for prevention
- A cause-effect chain diagram has been created using mermaid
- A solution implementation path diagram has been created using mermaid
- A complete set of prioritized actions has been defined
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A cause-effect chain diagram showing the path from symptom to root cause
   - A solution implementation path diagram showing the fix strategy
3. A written explanation of the complete causal chain with supporting evidence
4. Verification test details to confirm the root cause identification
5. A prioritized action plan addressing both immediate fixes and system improvements
