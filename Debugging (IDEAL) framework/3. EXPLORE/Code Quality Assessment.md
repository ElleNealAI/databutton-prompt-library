# Code Quality Assessment Prompt for Databutton

This prompt helps evaluate the structure, readability, and maintainability of your Databutton application code. It identifies potential technical debt, suggests refactoring opportunities, and provides recommendations for improvement.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify which part of your codebase you want to evaluate
3. The agent will analyze your code against best practices
4. You'll receive a comprehensive code quality report with actionable recommendations

## Code Quality Assessment Prompt

```
## Code Quality Assessment Request

I need to evaluate the quality of code in [SPECIFY SCOPE: entire application / specific feature / file]. Please analyze the code structure, patterns, and practices.

## Your Task

1. Analyze my application code to assess its quality and maintainability
2. Create a task titled "Code Quality Assessment: [Scope]"
3. In this task, provide a detailed quality analysis with these exact sections:

## CODE QUALITY ASSESSMENT REPORT

### Scope and Methodology
- **Scope**: [What was evaluated]
- **Files Examined**: [List of key files reviewed]
- **Assessment Approach**: [How the analysis was conducted]

### Overall Code Quality Score
- **Score**: [1-10 rating with brief justification]
- **Summary**: [1-2 paragraph overview of code quality]

### Strengths
- [List of positive code qualities and practices found]

### Areas for Improvement
| Issue | Location | Severity | Impact | Recommendation |
|-------|----------|----------|--------|----------------|
| [Description] | [File/line] | [High/Med/Low] | [Maintainability/Performance/Security] | [Brief fix] |

### Pattern Analysis
1. **Architecture Patterns**
   - **Observed Pattern**: [How the code is structured]
   - **Assessment**: [Evaluation of pattern effectiveness]
   - **Recommendation**: [Suggested improvements if any]

2. **State Management**
   - **Approach**: [How state is managed]
   - **Assessment**: [Evaluation of approach]
   - **Recommendation**: [Suggested improvements if any]

3. **Error Handling**
   - **Approach**: [How errors are handled]
   - **Assessment**: [Evaluation of approach]
   - **Recommendation**: [Suggested improvements if any]

4. **Code Organization**
   - **Approach**: [How code is organized]
   - **Assessment**: [Evaluation of organization]
   - **Recommendation**: [Suggested improvements if any]

### Code Examples

#### Before (Current Implementation)
// Example of current code with issues

#### After (Recommended Implementation)
// Example of improved code

### Technical Debt Assessment
- **Areas of Technical Debt**: [Identified technical debt]
- **Debt Impact**: [How the debt affects development]
- **Debt Reduction Plan**: [Prioritized steps to reduce debt]

### Refactoring Priorities
1. [High-priority refactoring recommendation]
2. [Medium-priority refactoring recommendation]
3. [Low-priority refactoring recommendation]

### Best Practices Checklist
- [ ] Component organization follows consistent pattern
- [ ] Proper separation of concerns
- [ ] DRY principle followed
- [ ] Error handling is comprehensive
- [ ] Code is well-commented
- [ ] Variable/function names are descriptive
- [ ] UI and business logic are properly separated
- [ ] State management is consistent
- [ ] Type safety is enforced where appropriate
- [ ] Performance considerations are addressed

## Important Instructions

- Assess both frontend (React) and backend (Python) code where applicable
- Evaluate against established industry best practices
- Provide specific code examples for issues and solutions
- Focus on patterns rather than nitpicking individual lines
- Balance identifying issues with recognizing good practices
- Make recommendations that are practical to implement
- Consider Databutton's specific architecture and constraints
```

## Sample Interaction

**You:** [Paste the prompt specifying what code you want evaluated]

**Agent:** I'll evaluate the code quality of your user authentication feature. First, I'll review the relevant files to understand the structure and implementation.

*[Agent analyzes code]*

**Agent:** I've completed my analysis of your authentication code. I'll create a task to document my findings and recommendations.

*[Creates task and builds quality report]*

**Agent:** I've created task #128 "Code Quality Assessment: User Authentication" with a comprehensive analysis of your code. The report highlights both strengths (clean component structure) and areas for improvement (inconsistent error handling). I've included specific code examples and prioritized recommendations for refactoring.

## Tips for Best Results

- Start with evaluating specific features rather than the entire application
- Focus on areas where you've experienced maintenance challenges
- Be open to architectural suggestions, not just surface-level fixes
- Use the report as a roadmap for incremental improvements
- Share the report with your team to establish coding standards
- Consider scheduling regular code quality assessments (quarterly)
