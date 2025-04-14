# API Integration Test Prompt for Databutton

This prompt helps verify that your API integrations are working correctly. It guides the agent to create comprehensive test cases for your API endpoints, validate responses, and identify integration issues.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Specify which API integration you want to test
3. The agent will analyze your code and create structured test cases
4. You'll receive a comprehensive API test report with validation results

## API Integration Test Prompt

```
## API Integration Test Request

I need to verify that my integration with [API NAME/ENDPOINT] is working correctly. Please help me test this integration.

## Your Task

1. Analyze my application code to understand the API integration
2. Create a task titled "API Integration Test: [API Name]"
3. In this task, develop and run tests to verify the integration
4. Provide a detailed test report with these exact sections:

## API INTEGRATION TEST REPORT

### API Overview
- **Name**: [API/Service name]
- **Purpose**: [What this API does in the application]
- **Integration Type**: [REST, GraphQL, WebSocket, etc.]
- **Endpoints Used**: [List of specific endpoints being tested]

### Test Cases
1. **Test Case**: [Name of test case]
   - **Endpoint**: [Specific endpoint being tested]
   - **Method**: [GET/POST/PUT/DELETE/etc.]
   - **Input Parameters**: [Required parameters]
   - **Expected Response**: [What should happen]
   - **Actual Response**: [What actually happened]
   - **Status**: [PASS/FAIL/WARNING]
   - **Notes**: [Observations or issues]

2. [Additional test cases following same format]

### Authentication Verification
- **Auth Method**: [How authentication is implemented]
- **Credential Storage**: [How credentials are stored/accessed]
- **Security Assessment**: [Any security concerns or best practices]

### Data Validation
- **Request Format**: [Are requests properly formatted?]
- **Response Parsing**: [Is the app correctly handling responses?]
- **Error Handling**: [How errors from the API are handled]

### Performance Analysis
- **Response Times**: [Average response time]
- **Rate Limiting**: [Any rate limit concerns]
- **Optimization Opportunities**: [Ways to improve performance]

### Integration Issues
- [List of identified issues]
- [Suggested fixes]

### Next Steps
1. [Recommended action]
2. [Additional recommendations]

## Important Instructions

- Generate concrete test cases with real inputs and expected outputs
- Execute tests if possible and document actual responses
- Verify both happy paths and error scenarios
- Check authentication implementation
- Examine error handling approaches
- Assess performance and optimization
- Provide code snippets for fixes where appropriate
- Use Python for backend API calls and JavaScript for frontend integrations
```

## Sample Interaction

**You:** [Paste the prompt specifying the API to test]

**Agent:** I'll help you test your integration with the Stripe Payment API. First, I'll analyze your code to understand how you're currently implementing this integration.

*[Agent analyzes code]*

**Agent:** I've identified the key integration points with Stripe in your application. I'll create a task to develop and run test cases for this integration.

*[Creates task and performs tests]*

**Agent:** I've created task #125 "API Integration Test: Stripe Payment API" with comprehensive test cases covering payment creation, webhooks, and error handling. The report includes actual response validation and identified two potential issues with your webhook handling.

## Tips for Best Results

- Be specific about which API you want to test
- Provide access to necessary API credentials (securely)
- Mention any specific concerns or issues you've been experiencing
- Consider testing both successful and error scenarios
- Review the test cases to ensure they cover your critical paths
- For complex APIs, consider focusing on the most critical endpoints first
