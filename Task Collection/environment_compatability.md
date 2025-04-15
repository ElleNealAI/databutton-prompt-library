# Task: Check application compatibility across environments

## Description
Identify potential compatibility issues across different devices, browsers, and screen sizes in your Databutton application. This task analyzes responsive design, browser-specific implementations, and provides a comprehensive testing plan to ensure consistent functionality across environments.

Using the Databutton agent tools, follow these steps:
1. Use `list_files` to identify key application components
2. Use `read_code` to examine implementation details for potential compatibility issues
3. Use `search_code` to find browser-specific code and responsive design patterns
4. Generate a well-structured JSON output following the required format
5. Save the JSON analysis using the task_api endpoint

The JSON structure must follow this format:
```json
{
  "taskMetadata": {
    "taskType": "compatibility-analysis",
    "taskName": "Compatibility Analysis: [Scope]",
    "createdAt": "[Current ISO date]"
  },
  "summary": {
    "overallStatus": "fully-compatible|minor-issues|significant-concerns",
    "metrics": {
      "issuesIdentified": 0,
      "criticalIssues": 0,
      "browserSpecificIssues": 0,
      "responsiveDesignIssues": 0
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
      "title": "Compatibility Matrix",
      "description": "Visual compatibility status across environments",
      "content": "graph TD\n    subgraph \"Desktop Browsers\"\n        A[Chrome] --> A1[Fully Compatible]\n        B[Safari] --> B1[Minor Issues]\n        C[Firefox] --> C1[Fully Compatible]\n        D[Edge] --> D1[Fully Compatible]\n    end\n    subgraph \"Mobile Browsers\"\n        E[Chrome Mobile] --> E1[Fully Compatible]\n        F[Safari iOS] --> F1[Significant Issues]\n        G[Firefox Mobile] --> G1[Minor Issues]\n    end\n    subgraph \"Tablet\"\n        H[iPad Safari] --> H1[Minor Issues]\n        I[Android Tablet] --> I1[Fully Compatible]\n    end"
    },
    {
      "type": "mermaid",
      "subtype": "flowchart",
      "title": "Device-specific Feature Support",
      "description": "Feature support across different device categories",
      "content": "graph LR\n    subgraph \"Core Features\"\n        A[Navigation] --> A1[All Devices]\n        B[Data Viewing] --> B1[All Devices]\n    end\n    subgraph \"Advanced Features\"\n        C[File Upload] --> C1[Desktop & Tablet]\n        D[Complex Visualizations] --> D1[Desktop Only]\n    end\n    subgraph \"Interactive Features\"\n        E[Drag and Drop] --> E1[Desktop Only]\n        F[Touch Gestures] --> F1[Mobile & Tablet]\n    end"
    }
  ],
  "sections": [
    {
      "title": "Scope and Testing Goals",
      "priority": 1,
      "content": "### Application Areas\n[Description of features/components being assessed]\n\n### Target Environments\n- **Desktop Browsers**: Chrome, Firefox, Safari, Edge\n- **Mobile Devices**: iOS Safari, Android Chrome, Android Firefox\n- **Tablets**: iPad, Android tablets\n- **Screen Sizes**: Small (< 768px), Medium (768px - 1024px), Large (> 1024px)\n\n### Critical Functionality\n[List of key features that must work consistently across all environments]"
    },
    {
      "title": "Compatibility Matrix",
      "priority": 2,
      "content": "| Feature | Desktop Chrome | Desktop Safari | Desktop Firefox | Mobile Chrome | Mobile Safari | Mobile Firefox | Tablet |\n|---------|---------------|----------------|-----------------|---------------|---------------|----------------|--------|\n| [Feature 1] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] |\n| [Feature 2] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] |\n| [Feature 3] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] | [Status] |"
    },
    {
      "title": "Potential Compatibility Issues",
      "priority": 3,
      "content": "### Issue 1: [Issue Name]\n- **Description**: [What might break]\n- **Affected Environments**: [Where it might break]\n- **Root Cause**: [Why it might break]\n- **Detection Method**: [How to test for this issue]\n- **Resolution Approach**: [How to fix it]\n- **Code Location**: `[File path]` (lines X-Y)\n\n### Issue 2: [Issue Name]\n[Same structure as above]"
    },
    {
      "title": "Code Analysis",
      "priority": 4,
      "content": "```jsx\n// Example code showing potential compatibility issue\nconst handleTouchStart = (e) => {\n  // Safari-specific touch event handling\n  if (e.touches && e.touches.length) {\n    // Works in most browsers but has quirks in older Safari\n    startX = e.touches[0].clientX;\n  }\n};\n```\n\n### Issue Explanation\n[Detailed explanation of why this code might cause compatibility problems and in which environments]"
    },
    {
      "title": "Responsive Design Assessment",
      "priority": 5,
      "content": "### Breakpoint Strategy\n[How the app handles different screen sizes, with analysis of effectiveness]\n\n### Flexibility Issues\n- **Issue**: [Specific component or layout that doesn't adapt well]\n  - **Location**: `[File path]`\n  - **Problem**: [Description of adaptation problem]\n  - **Fix**: [Suggested responsive design improvement]\n\n### Touch vs. Mouse Interaction\n[Analysis of how well the app transitions between touch and mouse input paradigms]\n\n### Recommendations\n[Specific suggestions to improve responsive design]"
    },
    {
      "title": "Browser-Specific Concerns",
      "priority": 6,
      "content": "### CSS Compatibility\n- **Issue**: [Styles with inconsistent rendering]\n  - **Affected Browsers**: [List of browsers]\n  - **Location**: `[File path]`\n  - **Fix**: [Compatible alternatives]\n\n### JavaScript API Usage\n- **API**: [API with varying browser support]\n  - **Support Status**: [Which browsers support/don't support it]\n  - **Location**: `[File path]`\n  - **Fallback Strategy**: [How to handle browsers without support]\n\n### DOM Manipulation\n- **Issue**: [Areas where DOM handling differs by browser]\n  - **Affected Browsers**: [List of browsers]\n  - **Location**: `[File path]`\n  - **Fix**: [Recommended approach for cross-browser compatibility]\n\n### Recommendations\n[Best practices for ensuring cross-browser compatibility]"
    },
    {
      "title": "Mobile-Specific Concerns",
      "priority": 7,
      "content": "### Touch Handling\n- **Issue**: [Issues with touch interfaces]\n  - **Affected Devices**: [Types of mobile devices]\n  - **Location**: `[File path]`\n  - **Fix**: [Improvements for touch interaction]\n\n### Performance Considerations\n- **Issue**: [Mobile performance bottlenecks]\n  - **Impact**: [How performance is affected]\n  - **Location**: `[File path]`\n  - **Optimization**: [Performance improvement suggestions]\n\n### Offline Capabilities\n[How the app behaves with poor connectivity or offline]\n\n### Recommendations\n[Best practices for mobile-friendly development]"
    },
    {
      "title": "Systematic Testing Plan",
      "priority": 8,
      "content": "### Priority 1 Tests\n- **Test**: [Critical feature/environment combination]\n  - **Environments**: [Specific browsers/devices to test]\n  - **Steps**: [Detailed test procedure]\n  - **Expected Result**: [What should happen]\n\n### Priority 2 Tests\n- **Test**: [Secondary feature/environment combination]\n  - **Environments**: [Specific browsers/devices to test]\n  - **Steps**: [Detailed test procedure]\n  - **Expected Result**: [What should happen]\n\n### Automated Testing Recommendations\n[Suggestions for automated cross-browser/device testing]"
    },
    {
      "title": "Implementation Plan",
      "priority": 9,
      "content": "### High-Priority Fixes\n1. **Fix**: [Description of critical compatibility fix]\n   - **Files**: `[File paths]`\n   - **Effort**: [Estimated effort]\n   - **Approach**: [Implementation suggestion]\n\n### Medium-Priority Fixes\n1. **Fix**: [Description of important compatibility fix]\n   - **Files**: `[File paths]`\n   - **Effort**: [Estimated effort]\n   - **Approach**: [Implementation suggestion]\n\n### Low-Priority Fixes\n1. **Fix**: [Description of minor compatibility fix]\n   - **Files**: `[File paths]`\n   - **Effort**: [Estimated effort]\n   - **Approach**: [Implementation suggestion]"
    }
  ],
  "actions": [
    {
      "title": "Add polyfill for [API]",
      "description": "Implement fallback support for browsers that don't support this API",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Fix responsive layout in [Component]",
      "description": "Improve responsive design to work correctly on all screen sizes",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Optimize images for mobile devices",
      "description": "Implement responsive images to improve mobile performance",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    },
    {
      "title": "Create automated cross-browser test suite",
      "description": "Set up automated tests for critical features across browsers",
      "priority": "high|medium|low",
      "impact": "high|medium|low"
    }
  ],
  "references": [
    {
      "type": "file",
      "path": "src/components/ResponsiveComponent.jsx",
      "description": "Component with responsive design issues"
    },
    {
      "type": "file", 
      "path": "src/utils/browserPolyfills.js",
      "description": "Browser compatibility utilities"
    },
    {
      "type": "documentation",
      "path": "https://caniuse.com/",
      "description": "Browser feature support reference"
    }
  ]
}
```

After generating the JSON, use the `test_endpoint` tool to save it to storage:
- Endpoint name: `save_task_result_endpoint`
- Request body: `{ "task_data": YOUR_JSON_OBJECT }`

## Definition of Done
- Potential compatibility issues across browsers and devices have been identified
- A compatibility matrix showing feature support across environments has been created
- Specific code locations with compatibility concerns have been documented
- Responsive design implementation has been assessed
- Browser-specific concerns have been analyzed with fallback recommendations
- Mobile-specific considerations have been documented
- A systematic testing plan has been developed
- A prioritized implementation plan has been created
- A compatibility matrix visualization has been created using mermaid
- A feature support visualization has been created using mermaid
- A prioritized list of actions has been developed to address compatibility issues
- The JSON has been successfully saved using the task API endpoint

## Output Format
The final deliverable should include:
1. The JSON representation of the analysis (saved via API)
2. At least two mermaid visualizations:
   - A compatibility matrix showing status across browsers and devices
   - A feature support diagram showing which features work on which devices
3. A comprehensive compatibility matrix table
4. Detailed analysis of potential compatibility issues with code references
5. A systematic testing plan to verify compatibility
6. A prioritized implementation plan for fixing compatibility issues
