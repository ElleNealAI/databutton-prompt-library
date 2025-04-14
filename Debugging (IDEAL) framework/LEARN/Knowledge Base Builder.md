# Knowledge Base Builder for Databutton

This prompt helps transform project insights and technical knowledge into a structured, searchable knowledge base. It organizes information in a consistent format that can be easily referenced by current and future team members.

## How to Use This Prompt

1. Copy everything in the code block below and paste it to the Databutton agent
2. Provide details about the technical knowledge you want to document
3. The agent will create well-structured, reusable documentation entries
4. You'll receive comprehensive knowledge base articles ready for team reference

## Knowledge Base Builder Prompt

```
## Knowledge Base Article Request

I need to document information about [TOPIC] for our team's knowledge base. Please help me create a comprehensive, well-structured article.

## Your Task

1. Help me organize this technical knowledge into a reusable reference
2. Create a task titled "Knowledge Base Article: [Topic]"
3. In this task, develop a comprehensive knowledge base entry with these exact sections:

## KNOWLEDGE BASE ARTICLE: [TOPIC]

### Overview
[1-2 paragraph summary of the topic and its importance]

### Quick Reference
- **Purpose**: [What problem does this solve?]
- **Key Concepts**: [Core terminology and ideas]
- **Related Topics**: [Links to related knowledge base articles]
- **Last Updated**: [Current date]

### Detailed Explanation
[Comprehensive explanation of the topic with clear subsections]

#### [Subsection 1]
[Detailed information about this aspect]

#### [Subsection 2]
[Detailed information about this aspect]

### Code Examples
```jsx
// Example 1: [Brief description]
// With comments explaining key concepts

# Example 2: [Brief description]
# With comments explaining key concepts

### Common Implementation Patterns
1. **[Pattern Name]**
   - **Use Case**: [When to use this pattern]
   - **Implementation**: [How to implement]
   - **Example**: [Brief code or configuration example]
   - **Considerations**: [Important notes or caveats]

2. **[Pattern Name]**
   - [Same structure as above]

### Troubleshooting Guide
| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| [Observable issue] | [Likely cause] | [How to fix] |
| [Observable issue] | [Likely cause] | [How to fix] |

### Best Practices
- [Specific recommendation]
- [Specific recommendation]
- [Specific recommendation]

### Anti-Patterns to Avoid
- **[Anti-Pattern Name]**: [Why it's problematic and alternatives]
- **[Anti-Pattern Name]**: [Why it's problematic and alternatives]

### External Resources
- [Link to official documentation with description]
- [Link to helpful tutorial with description]
- [Link to relevant article with description]

### Internal References
- [Links to related internal documents or code repositories]
- [Links to example implementations within your projects]

## Important Instructions

- Write in a clear, tutorial-like style with concrete examples
- Include both basic concepts for beginners and advanced details for experts
- Use consistent terminology throughout the article
- Include actual code snippets that can be copied and used
- Document common pitfalls and how to avoid them
- Structure information in a logical progression
- Include troubleshooting guidance for common issues
- Focus on practical, actionable information
- Use tables, lists, and code blocks for better readability
```

## Sample Interaction

**You:** [Paste the prompt specifying the technical topic]

**Agent:** I'll help you create a knowledge base article about Stripe Integration in Databutton. First, let me gather some key information to make this article as useful as possible.

What specific aspects of Stripe integration would you like to cover? For example:
- Initial setup and API keys
- Payment form implementation
- Webhook handling
- Subscription management
- Error handling

**You:** Let's cover all of those, but especially focus on webhook handling as that's been tricky for our team.

**Agent:** Great, I'll create a comprehensive article with special focus on webhook handling. Are there any specific challenges or solutions you've discovered with Stripe webhooks that should be included?

**You:** Yes, we had issues with webhook verification and handling payment_intent.succeeded events correctly.

**Agent:** Thanks for that information. I'll make sure to address those specific challenges in the troubleshooting and best practices sections.

*[Agent creates the knowledge base article]*

**Agent:** I've created task #134 "Knowledge Base Article: Stripe Integration in Databutton" with a comprehensive reference guide. The article includes detailed sections on all requested aspects with special focus on webhook handling, including specific guidance on webhook verification and properly handling payment_intent.succeeded events. I've included code examples, common patterns, troubleshooting tips, and best practices.

## Tips for Best Results

- Start with topics that multiple team members have asked about
- Be specific about which aspects need the most detailed documentation
- Share specific challenges you've faced for the troubleshooting section
- Review the article with both expert and novice team members
- Update articles periodically as your implementation evolves
- Create knowledge base articles immediately after solving complex problems
- Link related articles together to build a comprehensive knowledge network
