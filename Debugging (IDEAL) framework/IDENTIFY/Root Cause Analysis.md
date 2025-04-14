# Root Cause Analysis Prompt for Databutton

This prompt guides the agent through a systematic "5 Whys" analysis to trace surface-level symptoms to their underlying root causes. It helps move beyond treating symptoms to addressing fundamental issues in your Databutton application.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Describe the problem or issue you're experiencing
3. The agent will guide you through a structured root cause analysis
4. You'll receive a comprehensive cause-effect diagram and action plan

## Root Cause Analysis Prompt

```
## Root Cause Analysis Request

I'm experiencing this problem in my Databutton application:

[DESCRIBE THE PROBLEM HERE]

Please help me identify the root cause using the "5 Whys" technique.

## Your Task

1. Guide me through a systematic root cause analysis
2. Create a task titled "Root Cause Analysis: [Brief Problem Description]"
3. In this task, provide a detailed analysis with these exact sections:

## ROOT CAUSE ANALYSIS REPORT

### Problem Statement
[Clear definition of the observed problem/symptom]

### 5 Whys Analysis
1. **Symptom**: [Initial problem description]
   * **Why?**: [First-level questioning]
   
2. **Cause Level 1**: [Finding from first why]
   * **Why?**: [Second-level questioning]
   
3. **Cause Level 2**: [Finding from second why]
   * **Why?**: [Third-level questioning]
   
4. **Cause Level 3**: [Finding from third why]
   * **Why?**: [Fourth-level questioning]
   
5. **Cause Level 4**: [Finding from fourth why]
   * **Why?**: [Fifth-level questioning]
   
6. **Root Cause**: [Ultimate underlying cause]

### Cause-Effect Diagram
[Visual representation of the causal chain]

### Verification Tests
- [How to verify this is indeed the root cause]
- [Simple tests to confirm the hypothesis]

### Solution Plan
1. [First action to address root cause]
2. [Second action to address root cause]
3. [etc.]

### System-Level Improvements
- [Broader changes to prevent similar issues]
- [Process improvements]

## Important Instructions

- Focus on finding causes, not assigning blame
- Distinguish between the immediate technical cause and the underlying systematic cause
- Ask clarifying questions where information is insufficient
- Consider multiple causal paths if appropriate
- Suggest specific code or system checks to verify causes
- Provide actionable solutions at both root and intermediate cause levels
```

## Sample Interaction

**You:** [Paste the prompt with your problem description]

**Agent:** I'll help you identify the root cause of this issue. Let's work through the 5 Whys process systematically.

First, let me clarify my understanding of the problem. You're experiencing intermittent failures when users try to upload files. Is that correct?

**You:** Yes, that's right. It happens about 20% of the time.

**Agent:** I'll create a task for this analysis and begin tracing this to its root cause.
*[Creates task and performs analysis]*

**Agent:** I've created task #124 "Root Cause Analysis: Intermittent File Upload Failures" with a complete analysis. I've traced the symptom through several layers of causes and identified a likely root cause in the storage configuration. The report includes verification steps and a recommended solution plan.

## Tips for Best Results

- Provide as much context as possible about when and how the problem occurs
- Be open to answering clarifying questions from the agent
- Consider multiple potential causes rather than fixating on one explanation
- Use the verification tests suggested to confirm the true root cause
- Implement solutions at the root cause level, not just at the symptom level
