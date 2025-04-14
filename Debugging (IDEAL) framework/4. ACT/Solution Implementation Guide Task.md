# Solution Implementation Guide for Databutton

This prompt helps you systematically implement solutions to problems identified in your Databutton application. It guides the agent to create a structured implementation plan with clear steps, verification points, and rollback strategies.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify the issue you're addressing and the solution approach
3. The agent will create a structured implementation plan
4. You'll receive a step-by-step guide for implementing the solution safely

## Solution Implementation Guide Prompt

```
## Solution Implementation Request

I need to implement a solution for [ISSUE] in my Databutton application. Based on our analysis, we want to [BRIEF DESCRIPTION OF SOLUTION APPROACH].

## Your Task

1. Create a task titled "Implementation Plan: [Solution Description]"
2. In this task, develop a systematic implementation guide with these exact sections:

## SOLUTION IMPLEMENTATION GUIDE

### Overview
- **Issue Addressed**: [Brief description of the problem being solved]
- **Solution Approach**: [Summary of the chosen solution]
- **Expected Outcome**: [What will be improved after implementation]
- **Implementation Complexity**: [Low/Medium/High with brief explanation]

### Pre-Implementation Checklist
- [ ] Current state documented
- [ ] Backup created
- [ ] Dependencies identified
- [ ] Potential side effects considered
- [ ] Test plan prepared

### Implementation Steps

#### Phase 1: [Preparatory Steps]
1. **Step**: [First action to take]
   - **Files to Modify**: `[filename]`
   - **Changes to Make**:
   // Before:
   [existing code]
   
   // After:
   [modified code]

   - **Verification**: [How to confirm this step worked]

2. **Step**: [Second action]
   - [Same structure as above]

#### Phase 2: [Core Implementation]
1. **Step**: [First core change]
   - [Same structure as above]

2. **Step**: [Second core change]
   - [Same structure as above]

#### Phase 3: [Testing & Validation]
1. **Step**: [First verification action]
   - **Process**: [How to test]
   - **Expected Result**: [What should happen]
   - **If Failed**: [What to do if verification fails]

2. **Step**: [Second verification action]
   - [Same structure as above]

### Potential Issues and Mitigations
| Potential Issue | Warning Signs | Mitigation Strategy |
|-----------------|---------------|---------------------|
| [Issue 1] | [How to detect] | [How to address] |
| [Issue 2] | [How to detect] | [How to address] |

### Rollback Procedure
If implementation fails, follow these steps to revert changes:

1. [First rollback step]
2. [Second rollback step]
3. [etc.]

### Verification Plan
- **Functional Testing**: [Specific user flows to test]
- **Edge Cases**: [Boundary conditions to verify]
- **Performance Testing**: [Any performance aspects to check]

### Post-Implementation Tasks
- [ ] Update documentation
- [ ] Inform stakeholders
- [ ] Monitor for issues
- [ ] [Other follow-up activities]

## Important Instructions

- Break down the implementation into small, verifiable steps
- Provide exact code changes with before/after examples
- Include verification steps after each significant change
- Consider potential side effects of each modification
- Develop a clear rollback strategy for each phase
- Prioritize changes that minimize disruption to users
- Consider both the technical implementation and user impact
- Provide specific testing instructions for validation
```

## Sample Interaction

**You:** [Paste the prompt with details about your issue and solution approach]

**Agent:** I'll help you create a systematic implementation plan for improving the form validation in your checkout process. First, let me understand the current implementation and your intended solution.

*[Agent analyzes existing code and solution approach]*

**Agent:** Based on my understanding of your checkout form issues and the proposed solution using schema-based validation, I'll now create a structured implementation plan.

*[Creates implementation task]*

**Agent:** I've created task #136 "Implementation Plan: Schema-Based Form Validation for Checkout" with a comprehensive guide for implementing the solution. The plan includes detailed steps divided into preparation, core implementation, and validation phases. Each step includes specific code changes, verification points, and potential issues to watch for. I've also included a rollback procedure in case any problems arise during implementation.

## Tips for Best Results

- Be specific about what you're trying to implement
- Provide access to relevant code files for reference
- Follow the implementation steps in the specified order
- Complete verification steps before moving to the next phase
- Keep the task updated with your progress and any issues
- Use the rollback procedure if you encounter significant problems
- Complete the post-implementation tasks for long-term stability
