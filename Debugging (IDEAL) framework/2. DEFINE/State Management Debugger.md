# State Management Debugger for Databutton

This prompt helps diagnose and resolve React state management issues in your Databutton application. It traces state changes through your component hierarchy, identifies race conditions, and pinpoints unnecessary re-renders.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Describe the state-related issue you're experiencing
3. The agent will analyze your code and debug state management
4. You'll receive a structured state flow analysis with actionable solutions

## State Management Debugger Prompt

```
## State Management Debugging Request

I'm experiencing an issue with state management in my Databutton application:

[DESCRIBE THE STATE-RELATED ISSUE HERE]

Please help me debug this state management problem.

## Your Task

1. Analyze my application code to understand the state flow
2. Create a task titled "State Flow Analysis: [Brief Issue Description]"
3. In this task, provide a detailed state management analysis with these exact sections:

## STATE MANAGEMENT ANALYSIS

### Issue Summary
[Brief description of the reported state management issue]

### State Flow Diagram
[Visual representation of state flow using mermaid]

### State Lifecycle Analysis
1. **Initial State**
   - **Location**: [Where state is initialized]
   - **Initial Values**: [Default state values]
   - **Initialization Logic**: [How initial state is determined]

2. **State Updates**
   - **Update Triggers**: [Events/actions that cause state changes]
   - **Update Functions**: [Functions that modify state]
   - **Update Logic**: [How state transformations occur]

3. **State Consumption**
   - **Components Using This State**: [Where state is consumed]
   - **Render Dependencies**: [How renders depend on state]
   - **Side Effects**: [Effects triggered by state changes]

### Problem Identification
- **Issue Type**: [Classification of the state problem]
- **Affected Components**: [Components impacted by this issue]
- **Root Cause**: [Underlying cause of the state management problem]

### Code Analysis
```jsx
// Code examples showing problematic state management
// With annotations highlighting issues

### Solution Approach
1. [First step to resolve]
2. [Second step to resolve]
3. [etc.]

### Improved Implementation

// Example code showing improved state management


### Best Practices
- [State management principles relevant to this issue]
- [Patterns to avoid]
- [Recommendations for future development]

## Important Instructions

- Focus specifically on state management (useState, useContext, Redux, etc.)
- Trace state changes from initialization through updates to rendering
- Identify any race conditions, closure issues, or timing problems
- Look for unnecessary re-renders or performance bottlenecks
- Note any component lifecycle issues related to state
- Provide concrete code examples showing both problems and solutions
- If state is managed in multiple places, document the full state flow
```

## Sample Interaction

**You:** [Paste the prompt describing your state issue]

**Agent:** I'll help debug your state management issue. First, I need to understand how state flows through your application components.

*[Agent analyzes code]*

**Agent:** Based on my analysis of your codebase, I can see that the form submission state isn't being properly reset after submission. Let me create a task to document the full state flow and identify the root cause.

*[Creates task and performs state analysis]*

**Agent:** I've created task #127 "State Flow Analysis: Form State Not Resetting" with a detailed breakdown of your state management issue. The analysis includes a visual diagram of your state flow, identified a closure issue in your submission handler, and provided a solution that properly resets state after submission.

## Tips for Best Results

- Describe specifically what state behavior isn't working as expected
- Mention which components are involved in the problem
- Include any error messages or unexpected behaviors
- For complex state logic, focus on one specific flow at a time
- Consider implementing the suggested state management patterns
- Use the state flow diagram to better understand your application architecture
