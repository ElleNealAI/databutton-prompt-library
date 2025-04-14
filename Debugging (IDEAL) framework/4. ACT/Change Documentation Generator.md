# Change Documentation Generator for Databutton

This prompt helps you create comprehensive documentation of changes made to your Databutton application. It guides the agent to document what was changed, why it was changed, and the impact of those changes for future reference.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify the changes that were implemented
3. The agent will create structured documentation of these changes
4. You'll receive a clear record for knowledge sharing and future reference

## Change Documentation Generator Prompt

```
## Change Documentation Request

I've implemented changes to [FEATURE/COMPONENT] in my Databutton application to address [ISSUE/REQUIREMENT]. Please help me document these changes comprehensively.

## Your Task

1. Create a task titled "Change Documentation: [Feature/Component]"
2. In this task, develop detailed documentation with these exact sections:

## CHANGE DOCUMENTATION

### Overview
- **Feature/Area**: [What was modified]
- **Change Date**: [When changes were implemented]
- **Change Type**: [Bug fix/Enhancement/Refactoring/etc.]
- **Change Summary**: [Brief description of what was changed]

### Problem Statement
[Detailed description of the issue or requirement that prompted these changes]

### Solution Implemented
[Comprehensive explanation of the approach taken to address the problem]

### Technical Details

#### Modified Components
| Component | File Path | Nature of Change | Purpose |
|-----------|-----------|------------------|---------|
| [Component name] | `[file path]` | [What changed] | [Why it changed] |
| [Component name] | `[file path]` | [What changed] | [Why it changed] |

#### Code Changes
// Before:
[Previous code]

// After:
[New code]

// Explanation:
[Why this specific change was made]


#### Architecture Changes
- [Any changes to system architecture]
- [New patterns or approaches introduced]
- [Modified data flows or component relationships]

#### API Changes
| Endpoint | Change Type | Before | After | Migration Notes |
|----------|-------------|--------|-------|----------------|
| [Endpoint] | [Added/Modified/Removed] | [Previous state] | [New state] | [How to adapt] |

### Testing Performed
- **Test Scenarios**: [List of test cases executed]
- **Edge Cases Covered**: [Boundary conditions tested]
- **Results**: [Summary of test results]

### Deployment Notes
- **Deployment Process**: [How changes were deployed]
- **Configuration Changes**: [Any configuration updates required]
- **Dependencies**: [New or modified dependencies]
- **Rollback Procedure**: [How to revert if necessary]

### User Impact
- **UI Changes**: [Any visual or interaction changes]
- **Workflow Changes**: [How user processes are affected]
- **Performance Impact**: [Any changes to response times or resource usage]

### Known Limitations
- [Any remaining issues or constraints]
- [Workarounds for known limitations]

### Future Considerations
- [Potential enhancements or follow-up work]
- [Technical debt to address later]

## Important Instructions

- Document both what was changed and why it was changed
- Include visual aids (code snippets, before/after) to illustrate changes
- Highlight any potential side effects or risks
- Note any technical debt created or resolved
- Record both technical changes and user impact
- Make the documentation understandable to future developers
- Include sufficient context about the original problem
- Document any new patterns or approaches introduced
```

## Sample Interaction

**You:** [Paste the prompt with details about your implemented changes]

**Agent:** I'll help you document the changes you've made to the dashboard filtering system. First, I need to understand the specific changes you implemented.

Could you please share:
1. Which files were modified?
2. What was the core issue you were addressing?
3. How did you solve the problem?

**You:** [Provide requested information]

**Agent:** Thanks for that information. I'll now create comprehensive documentation of these changes.

*[Creates documentation task]*

**Agent:** I've created task #137 "Change Documentation: Dashboard Filtering System" with detailed documentation of your changes. The documentation includes a clear problem statement, comprehensive explanation of your solution approach, specific code changes with before/after comparisons, testing performed, and potential future considerations. This will serve as a valuable reference for your team and future developers.

## Tips for Best Results

- Document changes immediately after implementation while details are fresh
- Be thorough about why changes were made, not just what changed
- Include business context as well as technical details
- Share the documentation with team members to ensure completeness
- Link to related issues, tasks, or requirements
- Update the documentation if follow-up changes are made
- Use this documentation when onboarding new team members
