# Task: Create systematic solution implementation guide

## Description
Develop a comprehensive, structured implementation plan for a solution to an identified issue or feature requirement. This task creates a step-by-step guide with clear phases, verification points, and rollback strategies to ensure safe and successful implementation.

Using the Databutton agent tools, follow these steps:
1. Use `list_tasks` and `read_tasks` to understand the issue and proposed solution
2. Use `list_files` and `read_code` to examine affected components
3. Design a phased implementation approach with verification steps
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "implementation-guide",
    "taskName": "Implementation Plan: [Solution Description]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "ready-for-implementation|needs-refinement|complex-solution",
    "metrics": {
      "implementationSteps": 0,
      "filesAffected": 0,
      "estimatedEffort": "minor|moderate|significant",
      "estimatedDuration": "X hours/days"
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
      "title": "Implementation Phases",
      "description": "Visual representation of implementation phases and steps",
      "content": "graph TD\n    subgraph \"Phase 1: Preparation\"\n        A[Setup Environment] --> B[Create Backups]\n        B --> C[Document Current State]\n    end\n    subgraph \"Phase 2: Core Implementation\"\n        D[Implement Change 1] --> E[Verify Step 1]\n        E --> F[Implement Change 2]\n        F --> G[Verify Step 2]\n    end\n    subgraph \"Phase 3: Validation\"\n        H[Run Unit Tests] --> I[Integration Testing]\n        I --> J[User Acceptance]\n    end\n    C --> D\n    G --> H"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Rollback Decision Tree",
      "description": "Decision flow for rollback scenarios",
      "content": "graph TD\n    A{Issue Detected?} -->|Yes| B{Severity}\n    B -->|Critical| C[Immediate Rollback]\n    B -->|Medium| D{Fixable Quickly?}\n    B -->|Low| E[Continue & Add to Backlog]\n    D -->|Yes| F[Quick Fix]\n    D -->|No| C"
    }
  ],
  "sections": [
    {
      "title": "Overview",
      "priority": 1,
      "content": "### Issue Addressed\n[Brief description of the problem being solved]\n\n### Solution Approach\n[Summary of the chosen solution approach]\n\n### Expected Outcome\n[What will be improved after implementation]\n\n### Implementation Complexity\n[Low/Medium/High with brief explanation]"
    },
    {
      "title": "Pre-Implementation Checklist",
      "priority": 2,
      "content": "- [ ] Current state documented\n- [ ] Backup created\n- [ ] Dependencies identified\n- [ ] Potential side effects considered\n- [ ] Test plan prepared\n- [ ] Required resources available\n- [ ] Stakeholders notified"
    },
    {
      "title": "Implementation Steps",
      "priority": 3,
      "content": "## Phase 1: [Preparatory Steps]\n\n### Step 1: [First action to take]\n- **Files to Modify**: `[filename]`\n- **Changes to Make**:\n```jsx\n// Before:\n[existing code]\n\n// After:\n[modified code]\n```\n- **Verification**: [How to confirm this step worked]\n\n### Step 2: [Second action]\n[Same structure as above]\n\n## Phase 2: [Core Implementation]\n\n### Step 1: [First core change]\n[Same structure as above]\n\n### Step 2: [Second core change]\n[Same structure as above]\n\n## Phase 3: [Testing & Validation]\n\n### Step 1: [First verification action]\n- **Process**: [How to test]\n- **Expected Result**: [What should happen]\n- **If Failed**: [What to do if verification fails]"
    },
    {
      "title": "Potential Issues and Mitigations",
      "priority": 4,
      "content": "| Potential Issue | Warning Signs | Mitigation Strategy |\n|-----------------|---------------|---------------------|\n| [Issue 1] | [How to detect] | [How to address] |\n| [Issue 2] | [How to detect] | [How to address] |\n| [Issue 3] | [How to detect] | [How to address] |"
    },
    {
      "title": "Rollback Procedure",
      "priority": 5,
      "content": "### When to Rollback\n[Criteria for determining if rollback is necessary]\n\n### Rollback Steps\n1. [First rollback step]\n2. [Second rollback step]\n3. [etc.]\n\n### Verification After Rollback\n[How to verify system is back to original state]"
    },
    {
      "title": "Verification Plan",
      "priority": 6,
      "content": "### Functional Testing\n- **Test 1**: [Description]\n  - **Steps**: [How to test]\n  - **Expected Result**: [What should happen]\n\n### Edge Cases\n- **Case 1**: [Description]\n  - **Steps**: [How to test]\n  - **Expected Result**: [What should happen]\n\n### Performance Testing\n[Any performance aspects to check]"
    },
    {
      "title": "Dependencies and Prerequisites",
      "priority": 7,
      "content": "### Required Resources\n- [Library/tool/environment requirements]\n\n### External Dependencies\n- [Third-party services or APIs]\n\n### Team Dependencies\n- [Other team members or departments involved]"
    },
    {
      "title": "Communication Plan",
      "priority": 8,
      "content": "### Pre-Implementation\n- **Audience**: [Who to inform]\n- **Message**: [What to communicate]\n- **Timing**: [When to communicate]\n\n### During Implementation\n- **Status Updates**: [How progress will be communicated]\n- **Issues**: [How problems will be escalated]\n\n### Post-Implementation\n- **Success Notification**: [Who to inform and what to share]\n- **Knowledge Transfer**: [Documentation to update]"
    },
    {
      "title": "Post-Implementation Tasks",
      "priority": 9,
      "content": "- [ ] Update documentation\n- [ ] Inform stakeholders of completion\n- [ ] Monitor for issues\n- [ ] Gather feedback\n- [ ] Review implementation process\n- [ ] Update related tasks/tickets"
    }
  ],
  "actions": [
    {
      "title": "Create backup of [component/data]",
      "description": "Ensure we have a safe copy before making changes",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Implement [specific change]",
      "description": "Make the core implementation changes with careful verification",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Execute test plan",
      "description": "Run all verification tests to ensure proper implementation",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Update documentation",
      "description": "Ensure all relevant documentation reflects the changes",
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
      "path": "src/components/AffectedComponent.jsx",
      "description": "Component being modified"
    },
    {
      "type": "file", 
      "path": "src/services/RelatedService.js",
      "description": "Related service affected by changes"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A comprehensive overview of the solution has been provided
- A pre-implementation checklist has been created
- Detailed implementation steps have been organized in logical phases
- Each implementation step includes specific code changes and verification methods
- Potential issues have been identified with mitigation strategies
- A clear rollback procedure has been defined
- A verification plan has been created with specific test cases
- Dependencies and prerequisites have been documented
- A communication plan has been established for before, during, and after implementation
- Post-implementation tasks have been identified
- An implementation phases diagram has been created using mermaid
- A rollback decision tree has been created using mermaid
- A prioritized action plan has been developed
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the implementation guide (saved via API)
2. At least two mermaid visualizations:
   - An implementation phases diagram showing the structured approach
   - A rollback decision tree showing contingency planning
3. A comprehensive pre-implementation checklist
4. Detailed step-by-step implementation instructions with code examples
5. A verification plan to confirm successful implementation
6. A clear rollback procedure in case of issues
