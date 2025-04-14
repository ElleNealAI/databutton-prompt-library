# Debugging Task Creator for Databutton

This prompt helps you transform problem analysis into structured, actionable debugging tasks. It guides the agent to review insights from previous steps and create a focused debugging task with clear instructions for resolving the issue.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Reference your previous analysis tasks (from IDENTIFY and DEFINE phases)
3. The agent will synthesize the findings and create a structured debugging task
4. You'll receive a well-organized task ready for implementation

## Debugging Task Creator Prompt

```
## Debugging Task Creation Request

I need to create a structured debugging task based on our previous analysis of this issue:

[BRIEFLY DESCRIBE THE ISSUE AND REFERENCE PREVIOUS ANALYSIS TASKS]

Please help me create a focused debugging task to systematically solve this problem.

## Your Task

1. Review the referenced analysis tasks to understand the issue
2. Create a task titled "Debug: [Clear Description of Issue]"
3. Structure the task with these exact sections:

## DEBUGGING TASK: [ISSUE NAME]

### Issue Summary
[1-2 paragraphs summarizing the problem and its impact]

### Analysis Findings
- **Root Cause**: [The identified source of the problem]
- **Affected Components**: [List of components involved]
- **Related Issues**: [Any connected problems]
- **Priority**: [High/Medium/Low based on impact and urgency]

### Reproduction Steps
1. [Precise step to reproduce]
2. [Precise step to reproduce]
3. [etc.]

### Expected vs. Actual Behavior
- **Expected**: [What should happen when functioning correctly]
- **Actual**: [What currently happens]

### Technical Context
- **Files Involved**: 
  - `[filename1]`: [Brief description of role]
  - `[filename2]`: [Brief description of role]
- **State/Data Flow**: [Relevant state or data flow information]
- **Error Messages**: [Exact error messages if applicable]

### Fix Implementation Plan
1. **[Step 1]**
   - **Action**: [Specific code change or action]
   - **Files to Modify**: `[filename]`
   - **Purpose**: [What this change addresses]
   - **Verification**: [How to verify this change works]

2. **[Step 2]**
   - [Same structure as above]

3. **[Step 3]**
   - [Same structure as above]

### Code Implementation
// Example of the suggested code changes
// With clear comments explaining the fix


### Testing Instructions
1. [How to test the implemented solution]
2. [What specific behaviors to verify]
3. [Edge cases to check]

### Rollback Plan
- [How to revert changes if issues arise]

### Follow-up Tasks
- [Any additional work needed after this fix]
- [Potential improvements beyond the immediate fix]

## Important Instructions

- Create a debugging task that stands on its own, even for someone who didn't see the analysis
- Include only the most relevant information from the analysis
- Be specific about exactly which files need to be modified
- Provide concrete code snippets for the suggested fixes
- Suggest a step-by-step approach that addresses one issue at a time
- Include clear verification steps for each change
- Focus on solving the root cause, not just symptoms
- Prioritize changes by impact and dependency order
```

## Sample Interaction

**You:** [Paste the prompt with details about your issue]

**Agent:** I'll help you create a structured debugging task based on the analysis from your previous tasks. Let me first review those tasks to understand the issue fully.

*[Agent reviews previous analysis]*

**Agent:** Based on the analysis from tasks #125 "Root Cause Analysis: Form Submission Errors" and #126 "Component Dependency Map: Form Components", I'll now create a focused debugging task to resolve the issue.

*[Creates debugging task]*

**Agent:** I've created task #135 "Debug: Form Validation State Not Resetting After Submission" with a comprehensive plan to fix the issue. The task includes a clear summary of the problem, step-by-step implementation plan, specific code changes with explanations, and thorough testing instructions. Each step is designed to be independently verifiable, allowing for systematic debugging.

## Tips for Best Results

- Reference specific previous analysis tasks by number/name
- Make sure the issue has been properly analyzed before creating a debugging task
- Review the implementation plan to ensure it addresses the root cause
- Work through the debugging steps in the specified order
- Test each change individually before moving to the next step
- Update the task with your progress and any new findings
- Close the loop by verifying the fix resolves the original issue
