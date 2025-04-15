# Task: Debug state management issues

## Description
Diagnose and resolve React state management issues in your Databutton application. This task traces state changes through your component hierarchy, identifies race conditions, and pinpoints unnecessary re-renders to improve application performance and reliability.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` to identify React components in the application
2. Use `read_code` to examine state management patterns in key components
3. Use `search_code` to find state initialization, updates, and consumption points
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "state-management-debug",
    "taskName": "State Flow Analysis: [Brief Issue Description]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "critical-issues|needs-improvement|well-managed",
    "metrics": {
      "componentsAnalyzed": 0,
      "stateIssuesFound": 0,
      "unnecessaryRenders": 0
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
      "title": "State Flow Diagram",
      "description": "Visual representation of state flow through components",
      "content": "graph TD\n    A[Parent Component] -->|props.data| B[Child Component]\n    A -->|props.actions| C[Control Component]\n    B -->|renders| D[UI Output]\n    C -->|triggers| E{State Update}\n    E -->|new state| A\n    style E fill:#f55,stroke:#333,stroke-width:2px"
    },
    {
      "type": "mermaid",
      "subtype": "sequence",
      "title": "State Update Sequence",
      "description": "Sequence of state changes during a user interaction",
      "content": "sequenceDiagram\n    participant User\n    participant Component A\n    participant Redux Store\n    participant Component B\n    User->>Component A: Click Action\n    Component A->>Redux Store: Dispatch Action\n    Note right of Redux Store: State Update\n    Redux Store->>Component B: New State\n    Component B->>User: UI Update\n    Note over Redux Store: Unnecessary Re-render in Unrelated Component C"
    }
  ],
  "sections": [
    {
      "title": "Issue Summary",
      "priority": 1,
      "content": "[Brief description of the reported state management issue, including symptoms, affected features, and impact on the application]"
    },
    {
      "title": "State Lifecycle Analysis",
      "priority": 2,
      "content": "### Initial State\n- **Location**: `[File path]` (lines X-Y)\n- **Initial Values**: \n```jsx\n// Initial state definition\nconst [state, setState] = useState({\n  key1: value1,\n  key2: value2\n});\n```\n- **Initialization Logic**: [How initial state is determined]\n\n### State Updates\n- **Update Triggers**: [Events/actions that cause state changes]\n- **Update Functions**: \n```jsx\n// State update function\nconst updateState = (newValue) => {\n  setState(prev => ({\n    ...prev,\n    key1: newValue\n  }));\n};\n```\n- **Update Logic**: [How state transformations occur]\n\n### State Consumption\n- **Components Using This State**: [Where state is consumed]\n- **Render Dependencies**: [How renders depend on state]\n- **Side Effects**: \n```jsx\n// Effect triggered by state change\nuseEffect(() => {\n  // Side effect logic\n}, [state.key1]);\n```"
    },
    {
      "title": "Problem Identification",
      "priority": 3,
      "content": "### Issue Type\n[Classification of the state problem - e.g., race condition, closure issue, unnecessary re-render]\n\n### Affected Components\n[Components impacted by this issue]\n\n### Root Cause\n[Underlying cause of the state management problem with code references]"
    },
    {
      "title": "Code Analysis",
      "priority": 4,
      "content": "```jsx\n// Problematic state management code\nfunction ProblemComponent() {\n  const [count, setCount] = useState(0);\n  \n  // Issue: This will cause an infinite loop\n  useEffect(() => {\n    setCount(count + 1);\n  }, [count]);\n  \n  return <div>{count}</div>;\n}\n```\n\n### Issue Explanation\n[Detailed explanation of why this code is problematic]"
    },
    {
      "title": "Solution Approach",
      "priority": 5,
      "content": "1. **[First step to resolve]**\n   - **Change**: [Specific change to make]\n   - **Location**: `[File path]` (lines X-Y)\n   - **Reason**: [Why this fixes the issue]\n\n2. **[Second step to resolve]**\n   - **Change**: [Specific change to make]\n   - **Location**: `[File path]` (lines X-Y)\n   - **Reason**: [Why this fixes the issue]"
    },
    {
      "title": "Improved Implementation",
      "priority": 6,
      "content": "```jsx\n// Fixed state management code\nfunction ImprovedComponent() {\n  const [count, setCount] = useState(0);\n  \n  // Fixed: Only runs once on mount\n  useEffect(() => {\n    setCount(prevCount => prevCount + 1);\n  }, []); // Empty dependency array\n  \n  return <div>{count}</div>;\n}\n```\n\n### Solution Explanation\n[Detailed explanation of why this solution works]"
    },
    {
      "title": "Performance Impact",
      "priority": 7,
      "content": "### Before Fix\n- **Render Count**: [Number of renders before fix]\n- **Update Speed**: [Performance metrics before fix]\n- **Memory Usage**: [Memory usage before fix]\n\n### After Fix\n- **Render Count**: [Expected number of renders after fix]\n- **Update Speed**: [Expected performance improvement]\n- **Memory Usage**: [Expected memory usage improvement]"
    },
    {
      "title": "Best Practices",
      "priority": 8,
      "content": "### State Management Principles\n- [Principle 1 relevant to this issue]\n- [Principle 2 relevant to this issue]\n\n### Patterns to Avoid\n- [Anti-pattern 1 with example]\n- [Anti-pattern 2 with example]\n\n### Recommended Approaches\n- [Recommended pattern 1 with example]\n- [Recommended pattern 2 with example]"
    }
  ],
  "actions": [
    {
      "title": "Fix state update in [Component]",
      "description": "Modify component to use functional updates to avoid stale state issues",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Add memoization to [Component]",
      "description": "Implement React.memo() and useMemo() to prevent unnecessary re-renders",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Refactor state management in [Feature]",
      "description": "Reorganize state to improve data flow and reduce complexity",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/StateComponent.jsx",
      "description": "Component with state management issues"
    },
    {
      "type": "file", 
      "path": "src/hooks/useCustomState.js",
      "description": "Custom hook for state management"
    },
    {
      "type": "file",
      "path": "src/store/stateStore.js",
      "description": "Central state management"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- Complete state lifecycle has been analyzed from initialization through updates to consumption
- The component hierarchy and state flow have been mapped
- Specific state-related issues have been identified with code references
- Root causes of state management problems have been determined
- Improved implementation code has been provided with explanations
- Performance impact of the issues and fixes has been assessed
- State management best practices have been documented based on findings
- A state flow diagram has been created using mermaid
- A state update sequence diagram has been created using mermaid
- A prioritized list of actions has been created to resolve the issues
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A state flow diagram showing how state moves through components
   - A state update sequence diagram showing the timing of state changes
3. Detailed code analysis with before and after examples
4. A specific set of steps to implement the solution
5. State management best practices and patterns to avoid
6. A prioritized action plan to address the identified issues
