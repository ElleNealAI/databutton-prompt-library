# Performance Bottleneck Identifier for Databutton

This prompt helps identify and diagnose performance issues in your Databutton application. It systematically analyzes render times, API response speeds, and data processing efficiency to pinpoint the exact sources of slowdowns.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Describe the performance issues you're experiencing
3. The agent will analyze your code for potential bottlenecks
4. You'll receive a prioritized list of performance issues with specific solutions

## Performance Bottleneck Identifier Prompt

```
## Performance Analysis Request

My Databutton application is experiencing performance issues:

[DESCRIBE PERFORMANCE PROBLEMS HERE]

Please help me identify the bottlenecks causing these slowdowns.

## Your Task

1. Analyze my application code to identify potential performance bottlenecks
2. Create a task titled "Performance Analysis: [Brief Description]"
3. In this task, provide a detailed performance assessment with these exact sections:

## PERFORMANCE BOTTLENECK ANALYSIS

### Issue Summary
[Brief description of reported performance problems]

### Performance Metrics
- **Observed Slowdowns**: [Where/when performance issues occur]
- **Expected Performance**: [Reasonable performance expectations]
- **Impact Assessment**: [How performance issues affect users]

### Identified Bottlenecks
| Bottleneck | Location | Severity | Impact | Root Cause |
|------------|----------|----------|--------|------------|
| [Description] | [File/component] | [High/Med/Low] | [Load time/Responsiveness/etc.] | [Brief explanation] |

### Frontend Performance Issues
1. **Render Performance**
   - **Issue**: [Identified render bottlenecks]
   - **Cause**: [Why rendering is slow]
   - **Solution**: [How to improve render performance]
   - **Code Example**:
   ```jsx
   // Before: Inefficient rendering
   
   // After: Optimized rendering


2. **State Management**
   - **Issue**: [Identified state management bottlenecks]
   - **Cause**: [Why state management is inefficient]
   - **Solution**: [How to improve state management]
   - **Code Example**:

   // Example of improved state management


3. **UI Responsiveness**
   - **Issue**: [Identified UI responsiveness issues]
   - **Cause**: [Why UI is unresponsive]
   - **Solution**: [How to improve responsiveness]

### Backend Performance Issues
1. **API Response Times**
   - **Issue**: [Identified API bottlenecks]
   - **Cause**: [Why APIs are slow]
   - **Solution**: [How to improve API performance]
   - **Code Example**:

   # Example of optimized backend code


2. **Data Processing**
   - **Issue**: [Identified data processing bottlenecks]
   - **Cause**: [Why data processing is inefficient]
   - **Solution**: [How to improve data handling]

3. **Database Operations**
   - **Issue**: [Identified database bottlenecks]
   - **Cause**: [Why database operations are slow]
   - **Solution**: [How to optimize database access]

### Network & Resource Loading
- **Issue**: [Identified network/resource bottlenecks]
- **Cause**: [Why resource loading is inefficient]
- **Solution**: [How to improve resource loading]

### Implementation Plan
1. **Immediate Fixes** (Quick wins)
   - [List of simple, high-impact changes]

2. **Short-term Improvements** (Within a week)
   - [List of medium-effort, important optimizations]

3. **Long-term Optimizations** (Architectural changes)
   - [List of more involved performance improvements]

### Monitoring Recommendations
- [Suggestions for monitoring performance metrics]
- [Tools or approaches to catch future performance issues]

## Important Instructions

- Focus on finding actual performance bottlenecks, not theoretical ones
- Provide specific locations in the code where issues occur
- Include concrete, implementable solutions, not just descriptions of problems
- Prioritize bottlenecks by impact and difficulty to fix
- Consider both perceived performance (UI responsiveness) and actual performance
- Look for common React performance issues like excessive re-renders
- Check for inefficient Python code in backend functions
- Consider data loading patterns and caching opportunities
- Provide code examples for the most important fixes
```

## Sample Interaction

**You:** [Paste the prompt describing your performance issues]

**Agent:** I'll help identify the performance bottlenecks in your application. First, I need to analyze your codebase to understand where the slowdowns might be occurring.

*[Agent analyzes code]*

**Agent:** Based on my analysis, I've identified several potential performance bottlenecks in your application. I'll create a task to document these findings with specific recommendations.

*[Creates task and performs analysis]*

**Agent:** I've created task #130 "Performance Analysis: Dashboard Loading Time" with a comprehensive breakdown of performance issues. The analysis identified three major bottlenecks: an inefficient data fetching pattern that makes redundant API calls, component re-rendering issues in your dashboard, and unoptimized image loading. I've provided specific code examples and a prioritized implementation plan to address these issues.

## Tips for Best Results

- Be specific about where and when you notice slowdowns
- Include information about any recent changes that may have affected performance
- Mention the devices or conditions where performance issues are most noticeable
- Consider implementing the suggested immediate fixes first
- Use the monitoring recommendations to track improvements
- For complex applications, focus on the most critical user flows first
