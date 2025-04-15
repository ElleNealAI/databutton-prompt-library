# Task: Create comprehensive knowledge base article

## Description
Transform project insights and technical knowledge into a structured, searchable knowledge base article. This task organizes information in a consistent format that can be easily referenced by current and future team members, preserving valuable knowledge and improving team efficiency.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` and `read_code` to gather technical details about the topic
2. Use `list_tasks` and `read_tasks` to identify related experience and learnings
3. Organize the information into a comprehensive, well-structured article
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "knowledge-base-article",
    "taskName": "Knowledge Base Article: [Topic]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "articleType": "technical-guide|concept-explanation|tutorial|best-practices|troubleshooting",
    "metrics": {
      "wordCount": 0,
      "codeExamples": 0,
      "sectionCount": 0
    },
    "keyPoints": [
      "Key point 1",
      "Key point 2",
      "Key point 3"
    ]
  },
  "visualizations": [
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Concept Relationships",
      "description": "Visual representation of relationships between key concepts",
      "content": "graph TD\n    A[Core Concept] --> B[Sub-concept 1]\n    A --> C[Sub-concept 2]\n    B --> D[Implementation Detail 1]\n    B --> E[Implementation Detail 2]\n    C --> F[Implementation Detail 3]"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Process Flow",
      "description": "Step-by-step workflow for implementing the concept",
      "content": "graph LR\n    A[Step 1: Setup] --> B[Step 2: Configuration]\n    B --> C[Step 3: Implementation]\n    C --> D[Step 4: Testing]\n    D --> E[Step 5: Deployment]\n    style C fill:#f55,stroke:#333,stroke-width:2px"
    }
  ],
  "sections": [
    {
      "title": "Overview",
      "priority": 1,
      "content": "[1-2 paragraph summary of the topic and its importance, written in a clear, engaging style that helps readers understand the value of this knowledge]"
    },
    {
      "title": "Quick Reference",
      "priority": 2,
      "content": "### Purpose\n[What problem does this solve or what capability does it provide?]\n\n### Key Concepts\n- **[Term 1]**: [Brief definition]\n- **[Term 2]**: [Brief definition]\n- **[Term 3]**: [Brief definition]\n\n### Related Topics\n- [Related Topic 1]: [Brief description of relationship]\n- [Related Topic 2]: [Brief description of relationship]\n\n### Last Updated\n[Current date]"
    },
    {
      "title": "Detailed Explanation",
      "priority": 3,
      "content": "### [Subsection 1: Core Concept]\n[Comprehensive explanation of the fundamental concept, principles, or architecture]\n\n### [Subsection 2: Implementation Details]\n[Detailed information about practical implementation, with technical specifics]\n\n### [Subsection 3: Configuration Options]\n[Explanation of available configuration settings and their effects]\n\n### [Subsection 4: Integration Points]\n[How this interacts with other systems or components]"
    },
    {
      "title": "Code Examples",
      "priority": 4,
      "content": "### Example 1: [Basic Implementation]\n```jsx\n// Basic example with detailed comments\nimport React from 'react';\n\nfunction BasicExample() {\n  // Explanation of what this does\n  const value = someFunction();\n  \n  return (\n    <div>\n      {/* Explanation of what's happening here */}\n      {value}\n    </div>\n  );\n}\n```\n\n### Example 2: [Advanced Implementation]\n```python\n# Advanced example with detailed comments\ndef advanced_function(param1, param2):\n    \"\"\"Detailed docstring explaining function purpose\n    \n    Args:\n        param1: Explanation of parameter\n        param2: Explanation of parameter\n        \n    Returns:\n        Explanation of return value\n    \"\"\"\n    # Explanation of what's happening in this step\n    result = some_calculation(param1, param2)\n    \n    return result\n```"
    },
    {
      "title": "Common Implementation Patterns",
      "priority": 5,
      "content": "### Pattern 1: [Pattern Name]\n- **Use Case**: [When to use this pattern]\n- **Implementation**: [How to implement]\n- **Example**:\n```jsx\n// Example code for this pattern\n```\n- **Considerations**: [Important notes or caveats]\n\n### Pattern 2: [Pattern Name]\n[Same structure as above]"
    },
    {
      "title": "Troubleshooting Guide",
      "priority": 6,
      "content": "| Symptom | Possible Cause | Solution |\n|---------|----------------|----------|\n| [Observable issue] | [Likely cause] | [How to fix] |\n| [Error message] | [Likely cause] | [How to fix] |\n| [Unexpected behavior] | [Likely cause] | [How to fix] |"
    },
    {
      "title": "Best Practices",
      "priority": 7,
      "content": "1. **[Best Practice 1]**\n   - **Why**: [Explanation of the rationale]\n   - **Example**: [Brief example of implementation]\n\n2. **[Best Practice 2]**\n   - **Why**: [Explanation of the rationale]\n   - **Example**: [Brief example of implementation]\n\n3. **[Best Practice 3]**\n   - **Why**: [Explanation of the rationale]\n   - **Example**: [Brief example of implementation]"
    },
    {
      "title": "Anti-Patterns to Avoid",
      "priority": 8,
      "content": "### [Anti-Pattern 1]\n- **Problem**: [Why it's problematic]\n- **Example**: \n```jsx\n// Example of the anti-pattern\n```\n- **Better Approach**: \n```jsx\n// Example of the better solution\n```\n\n### [Anti-Pattern 2]\n[Same structure as above]"
    },
    {
      "title": "Performance Considerations",
      "priority": 9,
      "content": "### Potential Bottlenecks\n[Description of performance-sensitive areas]\n\n### Optimization Strategies\n[Specific techniques to improve performance]\n\n### Benchmarks\n[Any available performance metrics or comparisons]"
    },
    {
      "title": "Security Considerations",
      "priority": 10,
      "content": "### Potential Vulnerabilities\n[Security issues to be aware of]\n\n### Secure Implementation\n[How to implement securely]\n\n### Compliance Requirements\n[Any regulatory or policy requirements]"
    },
    {
      "title": "External Resources",
      "priority": 11,
      "content": "### Official Documentation\n- [Link to official documentation with description]\n\n### Tutorials\n- [Link to helpful tutorial with description]\n\n### Articles and Blog Posts\n- [Link to relevant article with description]"
    },
    {
      "title": "Internal References",
      "priority": 12,
      "content": "### Example Implementations\n- `[Project/file path]`: [Description of relevant example]\n\n### Related Knowledge Base Articles\n- [Link to related internal article]\n\n### Team Experts\n- [Name/Role]: [Areas of expertise]"
    }
  ],
  "actions": [
    {
      "title": "Apply [best practice] to [specific project area]",
      "description": "Implement the knowledge from this article in existing code",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Create [template or utility] based on patterns",
      "description": "Standardize implementation based on documented patterns",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Review codebase for [anti-pattern]",
      "description": "Identify and fix instances of documented anti-patterns",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Schedule knowledge sharing session",
      "description": "Present this topic to the team to spread knowledge",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/RelevantComponent.jsx",
      "description": "Example implementation"
    },
    {
      "type": "task",
      "path": "TASK-123",
      "description": "Related development task"
    },
    {
      "type": "documentation",
      "path": "https://example.com/docs",
      "description": "External reference documentation"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- A comprehensive overview of the topic has been provided
- Key concepts have been clearly defined
- Detailed explanations have been organized in logical sections
- Multiple code examples have been provided with clear comments
- Common implementation patterns have been documented
- A troubleshooting guide has been created
- Best practices have been identified and explained
- Anti-patterns have been described with better alternatives
- Performance and security considerations have been addressed
- External resources and internal references have been included
- A concept relationships diagram has been created using mermaid
- A process flow diagram has been created using mermaid
- A prioritized set of actions has been defined for applying this knowledge
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the knowledge base article (saved via API)
2. At least two mermaid visualizations:
   - A concept relationships diagram showing how key concepts relate
   - A process flow diagram showing implementation steps
3. Comprehensive explanation of the topic with clear subsections
4. Multiple code examples with detailed comments
5. Practical guidance for implementation and troubleshooting
6. Clear actionable items for applying this knowledge in projects
