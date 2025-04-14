# databutton-prompt-library
A collection of prompts shared by the community to improve the vibe coding process with the Databutton Agent.

# The IDEAL Troubleshooting Framework for Databutton

This guide helps you select the right prompts for solving problems in your Databutton applications. Each prompt is organized by phase in the IDEAL troubleshooting framework.

## What is the IDEAL Framework?

The IDEAL framework is a systematic approach to troubleshooting and problem-solving in software development:

- **I**dentify the problem
- **D**efine the scope and root causes
- **E**xplore potential solutions
- **A**ct on implementing fixes
- **L**earn from the experience

## Prompt Library Navigation

Select the appropriate prompt based on where you are in the troubleshooting process:

### Phase 1: IDENTIFY 🔍

When you're trying to understand what's wrong:

| Prompt | Purpose | When to Use |
|--------|---------|-------------|
| **[Error Message Decoder](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/1.%20IDENTIFY/Error%20Message%20Decoder.md)** | Explains cryptic error messages in plain language | When you encounter error messages you don't understand |
| **[Ambiguity Test](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/1.%20IDENTIFY/Ambiguity%20Test.md)** | Identifies unclear requirements | Before starting implementation to clarify expectations |
| **[Performance Bottleneck Identifier](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/1.%20IDENTIFY/Performance%20Bottleneck%20Identifier.md)** | Finds causes of slow performance | When your application is running slowly |
| **[User Experience Gap Analyzer](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/1.%20IDENTIFY/User%20Experience%20Gap%20Analyzer.md)** | Finds disconnects between user expectations and implementation | When users report confusing or frustrating experiences |

### Phase 2: DEFINE 🔬

When you need to understand the scope and root causes:

| Prompt | Purpose | When to Use |
|--------|---------|-------------|
| **[Root Cause Analysis](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/2.%20DEFINE/Root%20Cause%20Analysis.md)** | Traces symptoms to underlying causes | When you need to find the true source of an issue |
| **[Workflow Verification Framework](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/2.%20DEFINE/Workflow%20Verification%20Prompt.md)** | Documents actual workflows | When you need to understand how a feature is actually implemented |
| **[Component Dependency Mapper](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/2.%20DEFINE/Component%20Dependency%20Mapper.md)** | Visualizes relationships between components | When you need to understand how parts of your app are connected |
| **[State Management Debugger](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/2.%20DEFINE/State%20Management%20Debugger.md)** | Tracks React state issues | When you have state-related bugs or unexpected rendering |

### Phase 3: EXPLORE 🧪

When you're investigating potential solutions:

| Prompt | Purpose | When to Use |
|--------|---------|-------------|
| **[API Integration Test](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/3.%20EXPLORE/API%20Integration%20Test.md)** | Verifies API integrations | When testing connections to external services |
| **[Code Quality Assessment](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/3.%20EXPLORE/Code%20Quality%20Assessment.md)** | Evaluates code structure and patterns | When assessing maintainability or planning refactoring |
| **[Environment Compatibility Checker](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/3.%20EXPLORE/Environment%20Compatibility%20Checker.md)** | Identifies cross-platform issues | When ensuring your app works on different devices and browsers |

### Phase 4: ACT 🛠️
When you're ready to implement solutions:
| Prompt | Purpose | When to Use |
|--------|---------|-------------|
| **[Debugging Task Creator](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/4.%20ACT/Debugging%20Task%20Creator.md)** | Creates structured debugging tasks | When translating analysis into actionable fixes |
| **[Solution Implementation Guide](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/4.%20ACT/Solution%20Implementation%20Guide%20Task.md)** | Provides systematic implementation steps | When implementing complex solutions that need careful planning |
| **[Change Documentation Generator](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/4.%20ACT/Change%20Documentation%20Generator.md)** | Documents implemented changes | After making significant modifications to record what was done |

### Phase 5: LEARN 📚

When you want to improve for the future:

| Prompt | Purpose | When to Use |
|--------|---------|-------------|
| **[Project Retrospective Generator](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/5.%20LEARN/Project%20Retrospective%20Generator.md)** | Facilitates learning from experiences | At project milestones to capture lessons learned |
| **[Knowledge Base Builder](https://github.com/ElleNealAI/databutton-prompt-library/blob/main/Debugging%20(IDEAL)%20framework/5.%20LEARN/Knowledge%20Base%20Builder.md)** | Organizes technical knowledge | When creating documentation for future reference |

## How to Choose the Right Prompt

1. **Identify your current phase** in the problem-solving process
2. **Review the prompts** available for that phase
3. **Select the prompt** most closely matching your specific need
4. **Follow the instructions** in the prompt file

## Using Multiple Prompts Together

For complex problems, you may need to use prompts from different phases in sequence:

1. Start with **IDENTIFY** prompts to understand the issue
2. Move to **DEFINE** prompts to scope the problem
3. Use **EXPLORE** prompts to investigate solutions
4. Apply **ACT** prompts to implement fixes
5. Finish with **LEARN** prompts to document lessons
