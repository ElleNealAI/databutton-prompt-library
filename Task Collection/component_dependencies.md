# Task: Map component dependencies and data flow

## Description
Create a comprehensive map of component relationships and data flow patterns in your Databutton application. This task identifies how components interact with each other, how data moves through the system, and highlights potential areas for architectural improvements.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` to identify the key components in the application
2. Use `read_code` to examine the implementation of each component
3. Use `search_code` to find import statements, props passing, and data flow patterns
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "component-dependency-map",
    "taskName": "Component Dependency Map: [Scope]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "well-structured|moderate-coupling|high-coupling",
    "metrics": {
      "totalComponents": 0,
      "componentRelationships": 0,
      "circularDependencies": 0,
      "highImpactComponents": 0
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
      "title": "Component Dependency Graph",
      "description": "Visual representation of component relationships",
      "content": "graph TD\n    subgraph \"UI Components\"\n        A[App] --> B[Header]\n        A --> C[MainContent]\n        C --> D[FeatureA]\n        C --> E[FeatureB]\n    end\n    subgraph \"Services\"\n        F[AuthService] --> G[APIClient]\n        H[DataService] --> G\n    end\n    C --> F\n    D --> H\n    E --> H"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Data Flow Diagram",
      "description": "How data flows between components",
      "content": "graph LR\n    A[User Input] --> B[Component X]\n    B -->|API Request| C[Backend API]\n    C -->|DB Query| D[Database]\n    D -->|Response| C\n    C -->|Data| B\n    B -->|Render| E[UI Output]"
    }
  ],
  "sections": [
    {
      "title": "System Overview",
      "priority": 1,
      "content": "[Brief description of the system/feature being mapped, including its architecture, key design patterns, and organization principles]"
    },
    {
      "title": "Component Inventory",
      "priority": 2,
      "content": "| Component | Type | Purpose | Location |\n|-----------|------|---------|----------|\n| [Component Name] | [UI/Backend/Store] | [Brief purpose] | [File path] |\n| [Component Name] | [UI/Backend/Store] | [Brief purpose] | [File path] |\n| [etc.] | | | |"
    },
    {
      "title": "Key Dependencies",
      "priority": 3,
      "content": "### [Component Name 1]\n- **Type**: [UI/Backend/Store]\n- **Purpose**: [What this component does]\n- **Location**: `[File path]`\n- **Depends On**: [List of components it imports/uses]\n- **Used By**: [List of components that import/use it]\n- **Data In**: [Data received by this component]\n- **Data Out**: [Data sent from this component]\n- **State Management**: [How state is managed in this component]\n\n### [Component Name 2]\n[Same structure as above]"
    },
    {
      "title": "Critical Paths",
      "priority": 4,
      "content": "### [User Journey/Feature Name 1]\n1. **Start**: [Initial component]\n2. **→ [Component]**: [Data/action passed]\n3. **→ [Component]**: [Data/action passed]\n4. **→ End**: [Final component/outcome]\n\n### [User Journey/Feature Name 2]\n[Same structure as above]"
    },
    {
      "title": "Circular Dependencies",
      "priority": 5,
      "content": "### Circular Dependency 1\n- **Components**: [List of components in the circular dependency]\n- **Impact**: [How this affects the application]\n- **Resolution Strategy**: [How to break the circular dependency]\n\n### Circular Dependency 2\n[Same structure as above]"
    },
    {
      "title": "Potential Refactoring Opportunities",
      "priority": 6,
      "content": "### Opportunity 1: [Brief description]\n- **Current Structure**: [How it's currently organized]\n- **Proposed Change**: [Suggested refactoring]\n- **Benefits**: [What would improve]\n- **Implementation Complexity**: [Low/Medium/High]\n\n### Opportunity 2: [Brief description]\n[Same structure as above]"
    },
    {
      "title": "Impact Analysis",
      "priority": 7,
      "content": "### High-Impact Components\n- **[Component Name]**: Used by [number] other components, changes here affect [components/features]\n- **[Component Name]**: Used by [number] other components, changes here affect [components/features]\n\n### Isolated Components\n- **[Component Name]**: Has minimal connections, can be modified with low risk\n- **[Component Name]**: Has minimal connections, can be modified with low risk\n\n### Change Risk Assessment\n| Component | Risk Level | Impact Radius | Consider Before Changing |\n|-----------|------------|---------------|-------------------------|\n| [Component] | [High/Medium/Low] | [Number of affected components] | [Special considerations] |"
    }
  ],
  "actions": [
    {
      "title": "Refactor [Component] to reduce dependencies",
      "description": "Split component into smaller, more focused components to reduce coupling",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Extract shared logic into [Service]",
      "description": "Create a dedicated service for functionality currently duplicated across components",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Break circular dependency between [Components]",
      "description": "Introduce an intermediate abstraction to eliminate circular dependency",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/App.jsx",
      "description": "Main application component"
    },
    {
      "type": "file", 
      "path": "src/services/DataService.js",
      "description": "Core data service with many dependents"
    },
    {
      "type": "file",
      "path": "src/store/AppStore.js",
      "description": "Central state management"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- All major components in the specified scope have been identified and cataloged
- Dependency relationships between components have been mapped
- Data flow patterns have been documented
- Critical user journeys have been traced through components
- Circular dependencies have been identified if present
- High-impact components that affect many other parts are highlighted
- Potential refactoring opportunities have been identified
- A component dependency graph has been created using mermaid
- A data flow diagram has been created using mermaid
- A change risk assessment has been included to guide future development
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A component dependency graph showing relationships
   - A data flow diagram showing how information moves through the system
3. A complete component inventory with types, purposes, and locations
4. Detailed documentation of key dependencies and component interactions
5. A prioritized list of refactoring opportunities with expected benefits
6. A change risk assessment to guide future development decisions
