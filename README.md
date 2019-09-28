# react-pm-tool

The aim of the project is to critically evaluate the comparative adaptability and modifiability of React.js and Vue.js by first implementing a Minimum Viable Product (MVP) using each framework, and subsequently introducing change requests to assess the impact. For more project information, please visit: http://www.emmaboardman.co.uk/portfolio/casestudyDissertation.html 

![Image of Design](http://www.emmaboardman.co.uk/portfolio/img/diss-mobile.png)

Example User Stories:

| Feature | User Story |
| ------------- | ------------- |
| Calendar View to display tasks per resource| (US001) As a Project Manager, I want to be able to quickly understand what everyone is working on for the upcoming week, so that I have an overview of what is going on|
| Acceptance Criteria:| * Weekly tasks for each resource must be displayed within one page *  Tasks must have clear colour differentiation per client * Calendar gaps must have explanatory information (on holiday / in meeting, etc.) |

| Feature | User Story |
| ------------- | ------------- |
| Structured ticket creation flow | (US002) As a project manager, I want to know that tickets have been properly scoped, so that time is not wasted mid-task trying to acquire information to unblock the task ; (US003) As a project manager, I want to know that tickets coming in are not going to be time-consuming to parse, so that my time is not wasted trying to identify the actual issue at hand  |
| Acceptance Criteria:| * Ticket form inputs must be structured and labelled such that information required for scoping cannot be omitted * Incomplete tickets cannot be added to system * Visual feedback must be provided when input fields have been missed / filled with invalid data * Visual feedback must be provided when a task is successfully added, and in the event of an error * Input screen must close if ‘cancel’ is clicked |

| Feature | User Story |
| ------------- | ------------- |
| Editable tasks | (US004) As a project manager, I want to be able to edit the tasks, so that I can reschedule tasks if a high-priority task comes in |
| Acceptance Criteria:| * Scheduled time can be changed * All tasks following the scheduled time are updated to a later time, and the calendar UI is updated to reflect this 

