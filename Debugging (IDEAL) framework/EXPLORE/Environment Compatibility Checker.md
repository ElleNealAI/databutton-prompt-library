# Environment Compatibility Checker for Databutton

This prompt helps identify potential compatibility issues across different devices, browsers, and screen sizes in your Databutton application. It creates a systematic testing plan and produces a compatibility matrix highlighting areas that need attention.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify which features or components you want to check for compatibility
3. The agent will analyze your code for potential compatibility issues
4. You'll receive a structured compatibility report with testing recommendations

## Environment Compatibility Checker Prompt

```
## Environment Compatibility Check Request

I need to identify potential compatibility issues in my Databutton application across different environments. Please focus on [ENTIRE APP or SPECIFIC FEATURES].

## Your Task

1. Analyze my application code to identify potential compatibility concerns
2. Create a task titled "Compatibility Analysis: [Scope]"
3. In this task, provide a detailed compatibility assessment with these exact sections:

## COMPATIBILITY ASSESSMENT REPORT

### Scope and Testing Goals
- **Application Areas**: [What features/components are being assessed]
- **Target Environments**: [Devices, browsers, screen sizes to consider]
- **Critical Functionality**: [Key features that must work everywhere]

### Compatibility Matrix
| Feature | Desktop Chrome | Desktop Safari | Desktop Firefox | Mobile Chrome | Mobile Safari | Mobile Firefox | Tablet |
|---------|---------------|----------------|-----------------|---------------|---------------|----------------|--------|
| [Feature 1] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] |
| [Feature 2] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] | [Expected] |

### Potential Compatibility Issues
1. **[Issue Category]**
   - **Description**: [What might break]
   - **Affected Environments**: [Where it might break]
   - **Root Cause**: [Why it might break]
   - **Detection Method**: [How to test for this issue]
   - **Resolution Approach**: [How to fix it]

2. [Additional issues in same format]

### Code Analysis
// Example code showing potential compatibility issue
// With comments explaining the concern

### Responsive Design Assessment
- **Breakpoint Strategy**: [How the app handles different screen sizes]
- **Flexibility Issues**: [Areas that don't adapt well]
- **Touch vs. Mouse Interaction**: [Differences in handling]
- **Recommendations**: [How to improve responsiveness]

### Browser-Specific Concerns
- **CSS Compatibility**: [Styles that might have inconsistent rendering]
- **JavaScript API Usage**: [APIs with varying browser support]
- **DOM Manipulation**: [Areas where DOM handling differs by browser]
- **Recommendations**: [How to address browser differences]

### Mobile-Specific Concerns
- **Touch Handling**: [Issues with touch interfaces]
- **Performance Considerations**: [Mobile performance bottlenecks]
- **Offline Capabilities**: [How the app behaves with poor connectivity]
- **Recommendations**: [How to improve mobile experience]

### Systematic Testing Plan
1. **Priority 1 Tests**
   - [Critical feature/environment combinations to test]
   - [Test approach]

2. **Priority 2 Tests**
   - [Secondary feature/environment combinations]
   - [Test approach]

### Implementation Plan
1. [High-priority fixes]
2. [Medium-priority fixes]
3. [Low-priority fixes]

## Important Instructions

- Focus on actual code patterns that may cause compatibility issues
- Consider React's rendering behavior across different browsers
- Identify CSS properties with inconsistent browser support
- Look for browser-specific JavaScript APIs being used
- Assess responsive design implementation for various screen sizes
- Note potential performance issues on lower-powered devices
- Provide specific testing steps to verify compatibility
- Suggest polyfills or alternative approaches where appropriate
```

## Sample Interaction

**You:** [Paste the prompt specifying what you want to check]

**Agent:** I'll help assess the compatibility of your application across different environments. First, I'll review your code to identify potential issues.

*[Agent analyzes code]*

**Agent:** Based on my analysis, I've identified several areas where your application might have compatibility issues across different browsers and devices. I'll create a task to document these findings.

*[Creates task and builds compatibility report]*

**Agent:** I've created task #129 "Compatibility Analysis: User Dashboard" with a comprehensive assessment of potential compatibility issues. The report includes a detailed compatibility matrix, highlighted several CSS flexbox concerns in Safari, and identified touch event handling that might cause problems on older mobile browsers. I've also included a prioritized testing plan.

## Tips for Best Results

- Focus first on business-critical features and user flows
- Consider your actual user base's common devices and browsers
- Start testing on the most problematic browser/device combinations
- Implement the high-priority fixes first
- Consider adding browser/device analytics to your application
- Develop a regular testing schedule for different environments
