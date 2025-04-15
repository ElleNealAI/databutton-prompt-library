# VibeDebug: Structured Debugging Framework for Databutton

## What is VibeDebug?

VibeDebug is a structured debugging and analysis framework for Databutton applications that helps you systematically identify, define, explore, fix, and learn from issues in your applications. Based on the proven IDEAL methodology, VibeDebug transforms chaotic troubleshooting into a methodical process that saves time and builds team knowledge.

**VibeDebug seamlessly integrates with your Databutton workspace**, providing:
- Ready-to-use task templates for common debugging scenarios
- Standardized JSON output formats for consistent documentation
- Beautiful visualizations of complex problems
- A permanent record of debugging insights and solutions

## Getting Started in 3 Steps

Setting up VibeDebug in your Databutton project is simple:

1. **Create the required files** (copy our templates)
2. **Navigate to your Task Results Page**
3. **Run your first analysis task**

Let's walk through the setup process step by step.

## Setup Instructions

### Step 1: Create the Required Files

#### Create `TaskResultPage.jsx`

1. Create a page called `TaskResultPage` in your Databutton project
2. Create an API called `task_api` in your Databutton project


### The VibeDebug Process

1. **Select a Task Template**: Choose the appropriate analysis template based on the issue you're facing
2. **Agent Executes the Task**: The Databutton agent runs the analysis according to the template
3. **Results are Saved**: Analysis results are automatically saved to storage
4. **View Formatted Results**: Navigate to the Task Results Page to see a beautifully formatted report

### Available Task Types

VibeDebug includes templates for various debugging scenarios:

#### IDENTIFY Phase
- **Ambiguity Test**: Identify unclear requirements before implementation
- **Error Message Decoder**: Translate cryptic errors into actionable solutions
- **Performance Bottleneck Identifier**: Find slow spots in your application
- **User Experience Gap Analyzer**: Discover disconnects between user expectations and reality

#### DEFINE Phase
- **Root Cause Analysis**: Trace symptoms to underlying causes
- **Workflow Verification**: Document how features actually work
- **Component Dependency Mapper**: Visualize relationships between components
- **State Management Debugger**: Track React state issues

#### EXPLORE Phase
- **API Integration Test**: Verify external service connections
- **Code Quality Assessment**: Evaluate code structure and patterns
- **Environment Compatibility Checker**: Find cross-browser/device issues

#### ACT Phase
- **Debugging Task Creator**: Create structured debugging plans
- **Solution Implementation Guide**: Detailed implementation steps
- **Change Documentation Generator**: Record what was changed and why

#### LEARN Phase
- **Project Retrospective Generator**: Capture lessons learned
- **Knowledge Base Builder**: Create reusable documentation

## Advanced Usage

### Customizing Templates

You can modify the task templates to fit your specific needs:

1. Fork the [Databutton Prompt Library](https://github.com/ElleNealAI/databutton-prompt-library) repository
2. Modify the templates in the `Task Collection` folder
3. Update the `GITHUB_REPO_URL` in your `task_api.py` to point to your forked repository
4. Refresh the templates in your application

### Creating Custom VibeDebug Templates

You can create your own templates following this structure:

```markdown
# Task: [Clear task title]

## Description
[Detailed description of what the task does]

Using the Databutton agent tools, follow these steps:
1. [Step 1]
2. [Step 2]
3. [etc.]

The JSON structure must follow this format:
```json
{
  "taskMetadata": { ... },
  "summary": { ... },
  "visualizations": [ ... ],
  "sections": [ ... ],
  "actions": [ ... ],
  "references": [ ... ]
}


## Definition of Done
- [Criteria 1]
- [Criteria 2]
- [etc.]

## Output Format
[Description of expected output format]
```

## Support and Resources

For additional help:
- Submit issues on the GitHub repository

## Contributing

We welcome contributions to improve VibeDebug:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Submit a pull request with a clear description of your changes

Together, we can make debugging Databutton applications easier and more systematic!
