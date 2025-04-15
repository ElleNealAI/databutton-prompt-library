# Task: Generate project retrospective

## Description
Create a structured retrospective for your Databutton project or feature. This task facilitates reflection on what went well, what could be improved, and what actionable lessons can be applied to future work, helping teams learn and grow from their experiences.

Using the Databutton agent tools, follow these steps:
1. Use `list_tasks` and `read_tasks` to review completed project tasks
2. Use `list_files` and `read_code` to analyze implemented features
3. Synthesize patterns, successes, and challenges from the project
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "project-retrospective",
    "taskName": "Project Retrospective: [Project Name]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "successful|mostly-successful|challenging",
    "metrics": {
      "tasksCompleted": 0,
      "keySuccesses": 0,
      "keyLearnings": 0,
      "improvementAreas": 0
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
      "title": "Project Outcomes Assessment",
      "description": "Visual representation of project outcomes by category",
      "content": "graph TD\n    subgraph \"Successes\"\n        A[\"Technical Achievement 1\"] \n        B[\"Process Improvement 1\"]\n        C[\"Collaboration Win 1\"]\n    end\n    subgraph \"Challenges\"\n        D[\"Technical Challenge 1\"] \n        E[\"Process Challenge 1\"]\n    end\n    subgraph \"Learnings\"\n        F[\"Technical Learning 1\"] \n        G[\"Process Learning 1\"]\n    end"
    },
    {
      "type": "mermaid",
      "subtype": "gantt",
      "title": "Project Timeline Analysis",
      "description": "Gantt chart showing key milestones and phases",
      "content": "gantt\n    title Project Timeline\n    dateFormat YYYY-MM-DD\n    section Planning\n    Requirement Analysis :done, a1, 2023-01-01, 7d\n    Architecture Design :done, a2, after a1, 5d\n    section Development\n    Core Feature 1 :done, b1, after a2, 10d\n    Core Feature 2 :done, b2, after b1, 8d\n    section Testing\n    Integration Testing :done, c1, after b2, 5d\n    User Acceptance :done, c2, after c1, 3d\n    section Challenges\n    Blockers :crit, d1, 2023-01-15, 5d"
    }
  ],
  "sections": [
    {
      "title": "Project Overview",
      "priority": 1,
      "content": "### Project Scope\n[Brief description of what was built]\n\n### Goals\n[Original objectives of the project]\n\n### Outcomes\n[Actual results achieved]\n\n### Timeline\n[Key dates and milestones]"
    },
    {
      "title": "What Went Well",
      "priority": 2,
      "content": "### Technical Successes\n- **[Success 1]**: [Description and impact]\n  - **Evidence**: [Specific examples, metrics, or outcomes]\n  - **Contributing Factors**: [What led to this success]\n\n- **[Success 2]**: [Description and impact]\n  - **Evidence**: [Specific examples, metrics, or outcomes]\n  - **Contributing Factors**: [What led to this success]\n\n### Process Wins\n- **[Win 1]**: [Effective planning or coordination method]\n  - **Impact**: [How this improved the project]\n  - **Continuation Strategy**: [How to maintain this in future projects]\n\n### Team Dynamics\n- **[Positive Aspect]**: [How the team worked together effectively]\n  - **Benefits**: [Resulting advantages]\n  - **Success Factors**: [What enabled this positive dynamic]"
    },
    {
      "title": "Challenges Faced",
      "priority": 3,
      "content": "### Technical Challenges\n- **[Challenge 1]**: [Description of technical problem]\n  - **Impact**: [How it affected the project]\n  - **Resolution**: [How it was addressed or overcome]\n  - **Prevention Strategy**: [How to avoid similar issues in future]\n\n### Process Challenges\n- **[Challenge 1]**: [Workflow or coordination difficulty]\n  - **Impact**: [How it affected the project]\n  - **Resolution**: [How it was addressed]\n  - **Improvement Opportunity**: [Better approach for next time]\n\n### External Obstacles\n- **[Obstacle 1]**: [External factor that created difficulty]\n  - **Impact**: [How it affected the project]\n  - **Mitigation**: [How it was handled]\n  - **Future Preparedness**: [How to better prepare next time]"
    },
    {
      "title": "Root Cause Analysis",
      "priority": 4,
      "content": "### Common Themes\n[Patterns identified across challenges]\n\n### Contributing Factors\n[Underlying reasons for issues]\n\n### Systemic Issues\n[Organizational or process factors]\n\n### Success Patterns\n[Recurring patterns in what worked well]"
    },
    {
      "title": "Key Learnings",
      "priority": 5,
      "content": "### Technical Insights\n1. **[Learning 1]**: [Specific technical learning]\n   - **Context**: [When this insight was gained]\n   - **Application**: [How to apply this learning to future projects]\n\n2. **[Learning 2]**: [Specific technical learning]\n   - **Context**: [When this insight was gained]\n   - **Application**: [How to apply this learning to future projects]\n\n### Process Improvements\n1. **[Improvement 1]**: [Workflow or planning improvement]\n   - **Current Process**: [What was done]\n   - **Improved Process**: [Better approach for next time]\n\n2. **[Improvement 2]**: [Workflow or planning improvement]\n   - **Current Process**: [What was done]\n   - **Improved Process**: [Better approach for next time]"
    },
    {
      "title": "Action Plan",
      "priority": 6,
      "content": "### Immediate Actions\n1. **[Action]**: [Specific, actionable task]\n   - **Owner**: [Responsible person/role]\n   - **Timeline**: [Expected completion]\n   - **Success Criteria**: [How to measure completion]\n\n### Short-term Improvements\n1. **[Improvement]**: [Process or technical change to implement soon]\n   - **Owner**: [Responsible person/role]\n   - **Timeline**: [Expected implementation]\n   - **Success Criteria**: [How to measure effectiveness]\n\n### Long-term Initiatives\n1. **[Initiative]**: [Larger organizational or architectural change]\n   - **Approach**: [How to implement this change]\n   - **Timeline**: [Expected rollout]\n   - **Success Criteria**: [How to measure effectiveness]"
    },
    {
      "title": "Success Metrics",
      "priority": 7,
      "content": "### Key Performance Indicators\n[Metrics that should be tracked to measure improvement]\n\n### Baseline Measurements\n[Current state metrics for comparison]\n\n### Targets\n[Specific goals for improvement]"
    },
    {
      "title": "Tools and Technologies Assessment",
      "priority": 8,
      "content": "### Effective Tools\n- **[Tool/Technology]**: [What worked well]\n  - **Strengths**: [Specific benefits]\n  - **Continuation Strategy**: [How to maximize value]\n\n### Challenging Tools\n- **[Tool/Technology]**: [What presented difficulties]\n  - **Pain Points**: [Specific challenges]\n  - **Recommendation**: [Keep, replace, or modify approach]"
    },
    {
      "title": "Conclusion",
      "priority": 9,
      "content": "[Summary of the most important insights and next steps]"
    }
  ],
  "actions": [
    {
      "title": "Implement [specific process improvement]",
      "description": "Create and document a new process based on project learnings",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Create template for [specific artifact]",
      "description": "Standardize based on what worked well in this project",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Establish [specific practice]",
      "description": "Incorporate successful practice into standard workflow",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Document learnings about [technology/approach]",
      "description": "Create knowledge base article for future reference",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "task",
      "path": "TASK-123",
      "description": "Key project task"
    },
    {
      "type": "file",
      "path": "src/components/MainFeature.jsx",
      "description": "Core feature implementation"
    },
    {
      "type": "documentation",
      "path": "docs/project-plan.md",
      "description": "Original project plan"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A comprehensive project overview has been created
- Technical, process, and team successes have been documented
- Challenges and obstacles have been analyzed
- Root causes of issues have been identified
- Key learnings have been extracted and documented
- A specific action plan has been developed
- Success metrics have been defined for measuring improvements
- Tools and technologies have been assessed
- A project outcomes assessment diagram has been created using mermaid
- A project timeline analysis has been created using mermaid
- A prioritized set of actions has been defined
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the project retrospective (saved via API)
2. At least two mermaid visualizations:
   - A project outcomes assessment showing successes, challenges, and learnings
   - A project timeline analysis showing key phases and milestones
3. A comprehensive review of what went well and challenges faced
4. Specific, actionable learnings to apply to future projects
5. A concrete action plan with owners and timelines where applicable
6. Clear success metrics to measure the effectiveness of improvements
