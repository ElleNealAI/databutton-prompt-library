# Error Message Decoder Prompt for Databutton

This prompt helps decode cryptic error messages in your Databutton application. It guides the agent to analyze errors, explain their meaning in plain language, identify their source, and provide actionable solutions.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Include the exact error message you're encountering
3. The agent will analyze the error and create a structured report
4. You'll receive a clear explanation and actionable solution steps

## Error Message Decoder Prompt

```
## Error Message Analysis Request

I'm getting this error in my Databutton application:

[PASTE YOUR ERROR MESSAGE HERE]

Please help me understand what this error means and how to fix it.

## Your Task

1. Analyze this error message
2. Create a task titled "Error Analysis: [Brief Error Description]"
3. In this task, provide a detailed error analysis with these exact sections:

## ERROR ANALYSIS REPORT

### Error Summary
[Clear, non-technical explanation of what the error means in 1-2 sentences]

### Technical Details
- **Error Type**: [Classification of the error]
- **Component**: [Which part of the system is generating the error]
- **Severity**: [Critical/High/Medium/Low]
- **Context**: [When/where this error occurs]

### Root Cause
[Explanation of what's likely causing this error]

### Solution Steps
1. [First step to resolve]
2. [Second step to resolve]
3. [etc.]

### Prevention Tips
- [How to avoid this error in the future]

### Related Documentation
- [Links to relevant documentation if applicable]

## Important Instructions

- Translate technical jargon into plain language
- Provide specific, actionable steps to fix the error
- If the error is ambiguous, present the most likely causes in order of probability
- Include code examples where helpful
- Reference specific files in my application that might be causing the issue
- Suggest debugging techniques if more information is needed
```

## Sample Interaction

Here's how a typical interaction might look:

**You:** [Paste the prompt with your error message]

**Agent:** I'll analyze this error message and create a detailed report.
*[Creates task and begins analysis]*

**Agent:** I've created task #123 "Error Analysis: React Hook Dependencies Missing" with a complete breakdown of your error, its causes, and how to fix it.

## Common Error Types This Prompt Handles Well

- React and JavaScript runtime errors
- API connection failures
- State management issues
- Build and deployment errors
- Database and storage access problems
- Authentication failures
- UI rendering problems

## Tips for Best Results

- Include the complete error message, including stack traces if available
- Mention what you were doing when the error occurred
- If you have console logs leading up to the error, include those too
- For complex errors, consider creating a minimal reproduction example
- After implementing the suggested fixes, report back whether they worked
