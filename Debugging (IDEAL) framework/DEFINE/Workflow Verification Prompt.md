# Workflow Verification Framework Prompt for Databutton

This framework helps verify if your application's workflows match expected behavior by having the agent document the actual implementation in a clear, structured format.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. The agent will identify existing workflows in your application and ask which to analyze
3. Once selected, the agent will create a dedicated task and perform the analysis
4. You'll receive a clean, concise document of the actual workflow implementation
5. You'll also recieve a mermaid.js syntax which you can paste directly using the [Mermaid Live Playground](https://www.mermaidchart.com/play) to visualuse the diagram of the workflow for free

## Workflow Verification Prompt

```
## Workflow Verification Request

I need to verify my application's actual workflow implementation. Please help me document exactly how my application works.

## Your Task

1. Scan my application to identify the main user workflows
2. Present these workflows as a simple numbered list for me to choose from
3. After I select a workflow, create a task titled "Workflow Documentation: [Selected Workflow]"
4. In this task, document the ACTUAL implementation in a clear, visual format
5. Provide a final deliverable with these exact sections:

## WORKFLOW DOCUMENTATION: [NAME]

### Summary
[1-2 sentence overview of what this workflow does]

### User-Facing Steps
1. [First user action]
2. [Second user action]
3. [etc.]

### Behind-the-Scenes Logic
1. [First system action]
2. [Second system action] 
3. [etc.]

### Visual Workflow Diagram
[Insert mermaid diagram here]

### Key Components
- Frontend: [List key files/components]
- Backend: [List key API endpoints/functions]
- Data: [List key data structures/storage]

### Edge Cases & Error Handling
- [List how the system handles exceptions]

## Important Instructions

- Keep your chat explanations brief
- Focus on producing a high-quality final deliverable in the task
- Use diagrams and visuals wherever possible
- Document what IS implemented, not what SHOULD BE implemented
- Be precise about component names, file paths, and function calls
- Include actual code samples for critical functions
```

## Sample Interaction

The prompt is designed to produce interactions like this:

**Agent:** I've identified these main workflows in your application:
1. User registration
2. Content creation
3. Data visualization
4. Settings management

Which workflow would you like me to document?

**You:** Number 2

**Agent:** I'll create a task to document the Content Creation workflow.
*[Creates task and begins analysis]*

The agent will then work in the task to produce a clear, visual documentation of the actual workflow implementation.

## Tips for Best Results

- Let the agent complete its analysis before asking questions
- The final deliverable in the task is the main value - chat messages are secondary
- If the documentation isn't clear enough, ask for specific improvements
- Use this documentation to compare with your expected workflow
- For complex workflows, consider analyzing one sub-workflow at a time
