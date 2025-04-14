# Ambiguity Test Prompt for Databutton Tasks

This ambiguity test prompt is designed to work for any task in Databutton. It creates a systematic framework for identifying unclear or ambiguous aspects of a task before implementation begins.

## How to use this prompt
To use this prompt, paste the contents below to the agent after it has asked you if you want to create the task or directly tag an existing task to perform the analysis.
The agent will systematically work through each section to identify potential ambiguities before beginning implementation. This helps prevent misunderstandings and reduce the need for rework later in the process.

## Key features of this ambiguity test prompt:
* Comprehensive Categories: Covers 8 key areas where ambiguity commonly occurs in software development tasks.
* Structured Format: Uses a checklist approach with specific questions for each category to ensure thorough analysis.
* Tabular Report: Provides a clear way to document identified ambiguities and suggest clarifying questions.
* Recommendation System: Includes a recommendation on whether to proceed or seek clarification based on the severity of ambiguities found.
* Task-Agnostic Design: The questions are generalized to work with any type of development task, not just specific to one example.


## Visualising the reponse 
Use the [Markdown Live Preview](https://markdownlivepreview.com/) by pasting in the response from the agent. This will enable you to review the findings and see the produced table.

## Task Ambiguity Prompt
To use this prompt, paste the contents below to the agent after it has asked you if you want to create the task or directly tag an existing task to perform the analysis.

```

## Introduction
Before beginning implementation of this task, it's crucial you identify and clarify any ambiguous requirements.

## Instructions for Use
1. Run through this ambiguity test.
2. Analyse each section of the task using the structured questions below.
3. Flag any ambiguities found and suggest clarifying questions.
4. Present the analysis to the user before beginning implementation.

## Ambiguity Test Template

### 1. Goal Clarity
- [ ] Is the overall purpose of the task clearly stated?
- [ ] Can the success criteria be objectively verified?
- [ ] Are there multiple possible interpretations of what the task is asking for?

### 2. Scope Boundaries
- [ ] Are the boundaries of what is in and out of scope explicitly defined?
- [ ] Are there unstated assumptions about what the task includes or excludes?
- [ ] Is it clear where this task ends and future work would begin?

### 3. Technical Requirements
- [ ] Are all technical requirements specific and measurable?
- [ ] Are there unstated technical dependencies or prerequisites?
- [ ] Is the expected tech stack or technology choice clearly specified?
- [ ] Are performance expectations or constraints defined?

### 4. Data Requirements
- [ ] Is it clear what data is needed and where it will come from?
- [ ] Are data formats, structures, and schemas sufficiently defined?
- [ ] Are there any unstated assumptions about data quality or volume?

### 5. Integration Points
- [ ] Are all integration points with other systems clearly identified?
- [ ] Are authentication methods and security requirements defined?
- [ ] Is it clear how errors at integration points should be handled?

### 6. User Experience
- [ ] Are user interface requirements sufficiently detailed?
- [ ] Is the user flow or interaction model clearly described?
- [ ] Are there unstated assumptions about device support or browser compatibility?

### 7. Testing & Validation
- [ ] Is it clear how the implementation should be tested?
- [ ] Are success criteria measurable and verifiable?
- [ ] Are edge cases and error handling expectations defined?

### 8. Process Requirements
- [ ] Are there specific process requirements or constraints?
- [ ] Are there administrative or logging requirements?

## Ambiguity Analysis Report

| Category | Ambiguities Identified | Clarifying Questions |
|----------|------------------------|----------------------|
| Goal Clarity | [List ambiguities] | [List questions] |
| Scope Boundaries | [List ambiguities] | [List questions] |
| Technical Requirements | [List ambiguities] | [List questions] |
| Data Requirements | [List ambiguities] | [List questions] |
| Integration Points | [List ambiguities] | [List questions] |
| User Experience | [List ambiguities] | [List questions] |
| Testing & Validation | [List ambiguities] | [List questions] |
| Process Requirements | [List ambiguities] | [List questions] |

## Recommendation
Based on the ambiguities identified above, the agent recommends:
- [ ] Proceed with implementation (minimal ambiguities found)
- [ ] Seek clarification before proceeding (significant ambiguities found)

## Seeking Clarification
"I've analysed the task description and identified some areas that might benefit from clarification. Would you like me to proceed with what I understand, or would you prefer to clarify these points first?"```
