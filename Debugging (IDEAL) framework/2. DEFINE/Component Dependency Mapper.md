# Component Dependency Mapper for Databutton

This prompt helps visualize and document the relationships between components in your Databutton application. It creates a clear map of how data flows through your system, making it easier to understand dependencies and predict the impact of changes.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify which part of your application you want to map (entire app or specific feature)
3. The agent will analyze your codebase and create a dependency diagram
4. You'll receive a comprehensive component map with data flow paths

## Component Dependency Mapper Prompt

```
## Component Dependency Mapping Request

I need to understand how components in my application depend on each other and how data flows between them. Please map the dependencies for [ENTIRE APPLICATION or SPECIFIC FEATURE].

## Your Task

1. Analyze my application code to identify components and their relationships
2. Create a task titled "Component Dependency Map: [Scope]"
3. In this task, document the component architecture with these exact sections:

## COMPONENT DEPENDENCY MAP

### System Overview
[Brief description of the system/feature being mapped]

### Component Inventory
| Component | Type | Purpose | Location |
|-----------|------|---------|----------|
| [Component Name] | [UI/Backend/Store] | [Brief purpose] | [File path] |
| [Component Name] | [UI/Backend/Store] | [Brief purpose] | [File path] |
| [etc.] | | | |

### Data Flow Diagram
[Visual representation of data flow between components using mermaid]

### Key Dependencies
1. **[Component Name]**
   - **Depends On**: [List of components it imports/uses]
   - **Used By**: [List of components that import/use it]
   - **Data In**: [Data received by this component]
   - **Data Out**: [Data sent from this component]
   - **State Management**: [How state is managed in this component]

2. [Additional components following same format]

### Critical Paths
- **[User Journey/Feature Name]**: [Components involved in sequence]
- [Additional critical paths]

### Potential Refactoring Opportunities
- [Areas where dependencies could be simplified]
- [Components that could be decoupled]
- [Suggestions for improving data flow]

### Impact Analysis
- **High-Impact Components**: [Components with many dependents]
- **Isolated Components**: [Components with few dependencies]
- **Change Risk Assessment**: [Areas where changes would have widespread impact]

## Important Instructions

- Focus on identifying actual code dependencies, not theoretical ones
- Use file paths and component names exactly as they appear in the code
- Create clear, readable diagrams showing parent-child relationships and data flow
- Document both frontend (React) and backend (Python) dependencies
- Identify how data is passed (props, context, store, API calls)
- Note any circular dependencies or tightly coupled components
- Provide specific code examples of key dependencies
```

## Sample Interaction

**You:** [Paste the prompt specifying what you want to map]

**Agent:** I'll analyze your application to map out component dependencies and data flow. First, I'll examine your codebase to identify all components and their relationships.

*[Agent analyzes code]*

**Agent:** Based on my analysis, I've identified the main components in your application and how they interact. I'll create a task to document this component architecture.

*[Creates task and builds dependency map]*

**Agent:** I've created task #126 "Component Dependency Map: User Authentication Flow" with a comprehensive analysis of your component architecture. The map includes a visual diagram of data flow, detailed dependency information for each component, and identified some potential refactoring opportunities to reduce coupling.

## Tips for Best Results

- For large applications, focus on mapping one feature or user flow at a time
- Review the component inventory to ensure all relevant parts are included
- Pay special attention to the Critical Paths section to understand key workflows
- Use the Impact Analysis section when planning refactoring or new features
- Consider mapping both current architecture and proposed improvements
