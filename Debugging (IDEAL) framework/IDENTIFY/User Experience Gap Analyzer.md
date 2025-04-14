# User Experience Gap Analyzer for Databutton

This prompt helps identify disconnects between user expectations and your application's implementation. It analyzes friction points in the user journey and provides recommendations to improve the overall user experience.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Describe the user experience issues or feedback you're addressing
3. The agent will analyze your UI implementation against user expectations
4. You'll receive a detailed UX gap analysis with specific improvement recommendations

## User Experience Gap Analyzer Prompt

```
## UX Gap Analysis Request

I need to analyze the user experience of [FEATURE/WORKFLOW] in my application. Users have reported [SPECIFIC FEEDBACK OR ISSUES, or "I want to proactively improve this area"].

## Your Task

1. Analyze my application code to understand the user experience implementation
2. Create a task titled "UX Gap Analysis: [Feature/Workflow]"
3. In this task, document the UX gaps with these exact sections:

## USER EXPERIENCE GAP ANALYSIS

### Feature Overview
[Brief description of the feature/workflow being analyzed]

### User Expectations vs. Implementation
| User Expectation | Current Implementation | Gap Analysis | Impact on User |
|------------------|------------------------|--------------|----------------|
| [What users expect] | [What actually happens] | [Nature of mismatch] | [How it affects users] |

### User Journey Friction Map
1. **Step**: [First step in workflow]
   - **User Goal**: [What user wants to accomplish]
   - **Current Experience**: [What happens now]
   - **Friction Points**: [Where users get confused/frustrated]
   - **Improvement Opportunity**: [How to reduce friction]

2. **Step**: [Next step in workflow]
   - [Same structure as above]

### Mental Model Analysis
- **User Mental Model**: [How users think the feature works]
- **System Implementation**: [How it actually works]
- **Alignment Gaps**: [Where these models don't match]
- **Alignment Solutions**: [How to bring these models closer]

### Usability Principles Assessment
1. **Visibility of System Status**
   - **Current Implementation**: [How system status is shown]
   - **Gaps**: [Issues with status visibility]
   - **Recommendations**: [How to improve]

2. **Match Between System and Real World**
   - **Current Implementation**: [How well terminology matches users' language]
   - **Gaps**: [Mismatches in language/concepts]
   - **Recommendations**: [How to improve]

3. **User Control and Freedom**
   - **Current Implementation**: [How much control users have]
   - **Gaps**: [Where users feel trapped]
   - **Recommendations**: [How to improve]

4. **Error Prevention and Recovery**
   - **Current Implementation**: [How errors are prevented/handled]
   - **Gaps**: [Issues with error handling]
   - **Recommendations**: [How to improve]

### Visual Design and Information Architecture
- **Layout Issues**: [Problems with visual organization]
- **Information Hierarchy**: [Issues with content prioritization]
- **Visual Feedback**: [Problems with interaction feedback]
- **Recommendations**: [How to improve visual aspects]

### Accessibility Considerations
- **Current Accessibility**: [State of accessibility]
- **WCAG Compliance Gaps**: [Where accessibility falls short]
- **Recommendations**: [How to improve accessibility]

### UI Code Analysis

// Example of problematic UI implementation
// With annotations explaining UX issues


### Recommended UI Improvements

// Example of improved UI implementation
// With annotations explaining benefits


### Prioritized Improvement Plan
1. **High Impact, Low Effort**
   - [List of quick UX wins]

2. **High Impact, High Effort**
   - [List of important but complex improvements]

3. **Lower Impact**
   - [List of nice-to-have improvements]

### Testing Recommendations
- [Suggestions for validating UX improvements]
- [Methods to gather user feedback]

## Important Instructions

- Focus on the user perspective and experience, not just technical implementation
- Identify cognitive load points where users have to think too hard
- Consider both novice and experienced user perspectives
- Analyze actual UI flows against established UX principles
- Look for inconsistencies in interaction patterns
- Identify unclear feedback or confirmation mechanisms
- Suggest concrete, implementable UI improvements
- Provide mockups or code examples where helpful
- Consider mobile and desktop experiences if relevant
```

## Sample Interaction

**You:** [Paste the prompt describing your UX concerns]

**Agent:** I'll help analyze the user experience gaps in your sign-up workflow. First, I need to understand how this feature is currently implemented in your application.

*[Agent analyzes code]*

**Agent:** Based on my review of your sign-up implementation, I can see several potential friction points in the user journey. I'll create a task to document these findings with specific recommendations.

*[Creates task and performs analysis]*

**Agent:** I've created task #131 "UX Gap Analysis: Sign-Up Workflow" with a comprehensive breakdown of user experience issues. The analysis identified several key gaps, including unclear error messages, a lengthy form with no progress indication, and confusing navigation after submission. I've provided a prioritized improvement plan with mockups for the most critical changes.

## Tips for Best Results

- Include any direct user feedback you've received
- Specify which user types or personas you're most concerned about
- Mention your design goals for the feature
- Consider implementing high-impact, low-effort improvements first
- Use the testing recommendations to validate changes
- Share the analysis with your team to align on UX priorities
