# Task: Identify performance bottlenecks in application

## Description
Analyze your Databutton application to identify performance bottlenecks that cause slowdowns in rendering, API response times, and data processing. Create a comprehensive performance assessment with prioritized optimization recommendations.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` and `read_code` to examine the application structure and identify potential bottleneck areas
2. Use `search_code` to find performance-critical patterns like inefficient loops, redundant calculations, or excessive re-renders
3. Analyze backend Python code for data processing efficiency and frontend React code for rendering performance
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "performance-analysis",
    "taskName": "Performance Analysis: [Brief Description]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "critical-issues|needs-optimization|acceptable",
    "metrics": {
      "totalBottlenecksFound": 0,
      "highPriorityIssues": 0,
      "estimatedImprovementPotential": "significant|moderate|minor"
    },
    "keyFindings": [
      "Key finding 1",
      "Key finding 2",
      "Key finding 3"
    ]
  },
  "visualizations": [
    {
      "type": "mermaid",
      "subtype": "graph",
      "title": "Performance Bottleneck Map",
      "description": "Visual map of performance bottlenecks by severity",
      "content": "graph TD\n    subgraph \"Critical Bottlenecks\"\n        A[\"Inefficient Data Loading<br/>⚠️ High Impact\"] \n        B[\"Excessive Re-rendering<br/>⚠️ High Impact\"]\n    end\n    subgraph \"Significant Issues\"\n        C[\"Unoptimized API Calls<br/>⚡ Medium Impact\"]\n        D[\"Missing Pagination<br/>⚡ Medium Impact\"]\n    end\n    subgraph \"Minor Improvements\"\n        E[\"Image Optimization<br/>✓ Low Impact\"]\n    end"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "User Flow Performance Timeline",
      "description": "Performance timeline along a critical user flow",
      "content": "graph LR\n    A[Page Load] -->|2.3s| B[Data Fetch]\n    B -->|4.1s| C[Render List]\n    C -->|0.8s| D[User Interaction]\n    D -->|1.5s| E[Response]\n    style B fill:#f55,stroke:#333,stroke-width:2px\n    style C fill:#f55,stroke:#333,stroke-width:2px"
    }
  ],
  "sections": [
    {
      "title": "Frontend Performance Issues",
      "priority": 1,
      "content": "### Render Performance\n- **Issue**: [Identified render bottlenecks]\n- **Location**: `[file path]`\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why rendering is slow]\n- **Solution**: [How to improve render performance]\n\n```jsx\n// Before: Inefficient rendering\n[code snippet]\n\n// After: Optimized rendering\n[improved code snippet]\n```\n\n### State Management\n- **Issue**: [Identified state management bottlenecks]\n- **Location**: `[file path]`\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why state management is inefficient]\n- **Solution**: [How to improve state management]\n\n### UI Responsiveness\n- **Issue**: [Identified UI responsiveness issues]\n- **Location**: `[file path]`\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why UI is unresponsive]\n- **Solution**: [How to improve responsiveness]"
    },
    {
      "title": "Backend Performance Issues",
      "priority": 2,
      "content": "### API Response Times\n- **Issue**: [Identified API bottlenecks]\n- **Endpoint**: `[endpoint path]`\n- **Current Response Time**: [measured time]\n- **Cause**: [Why APIs are slow]\n- **Solution**: [How to improve API performance]\n\n```python\n# Before: Inefficient API implementation\n[code snippet]\n\n# After: Optimized implementation\n[improved code snippet]\n```\n\n### Data Processing\n- **Issue**: [Identified data processing bottlenecks]\n- **Location**: `[file path]`\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why data processing is inefficient]\n- **Solution**: [How to improve data handling]\n\n### Database Operations\n- **Issue**: [Identified database bottlenecks]\n- **Location**: `[file path]`\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why database operations are slow]\n- **Solution**: [How to optimize database access]"
    },
    {
      "title": "Network & Resource Loading",
      "priority": 3,
      "content": "### Resource Loading\n- **Issue**: [Identified resource loading bottlenecks]\n- **Resources**: [Specific resources causing issues]\n- **Impact**: [How this affects performance]\n- **Cause**: [Why resource loading is inefficient]\n- **Solution**: [How to improve resource loading]\n\n### Network Requests\n- **Issue**: [Identified network request issues]\n- **Impact**: [Quantified impact when possible]\n- **Cause**: [Why network requests are problematic]\n- **Solution**: [How to optimize network requests]"
    },
    {
      "title": "Implementation Plan",
      "priority": 4,
      "content": "### Immediate Fixes\n[List of simple, high-impact changes]\n\n### Short-term Improvements\n[List of medium-effort, important optimizations]\n\n### Long-term Optimizations\n[List of more involved performance improvements]"
    }
  ],
  "actions": [
    {
      "title": "Implement memoization in [Component]",
      "description": "Add React.memo() and useMemo() to prevent unnecessary re-renders",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Optimize data fetching in [API endpoint]",
      "description": "Implement query optimization and caching to reduce response time",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/SlowComponent.jsx",
      "description": "Component with render performance issues"
    },
    {
      "type": "file",
      "path": "src/api/dataProcessor.py",
      "description": "API with slow data processing"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- Frontend performance issues have been identified and analyzed
- Backend performance bottlenecks have been located and explained
- Network and resource loading inefficiencies have been documented
- Specific code locations and patterns causing slowdowns have been identified
- Before/after code examples have been provided for key optimizations
- A performance bottleneck map has been created using mermaid
- A user flow performance timeline has been created using mermaid
- A prioritized implementation plan has been developed
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A performance bottleneck map showing issues by severity
   - A user flow performance timeline showing bottlenecks in a critical path
3. A written summary with overall performance assessment
4. Code examples showing both inefficient and optimized implementations
5. A prioritized action plan for performance improvements
