Features
    Add Events: Users can add events with a start and end time, ranging from 0 to 24.
    No Overlaps: If an event overlaps with an existing one, the application prevents it from being added and notifies the user.
    View Events: Displays all scheduled events in a list format, showing start and end times.

Tech stack
  Backend: Node.js, Express
  Frontend: Angular
  HTTP Client: Axios
  Styling: Custom CSS

POST /addEvent
    Adds a new event.
GET /getEvents
    Retrieves all scheduled events.

Thought Process for Event Scheduler Project: 

1. Understanding the Requirements
The primary requirements for this project were:
    Build a scheduling system that allows users to add events within a 24-hour day.
    Prevent overlapping events to ensure clarity and avoid conflicts.
    Provide a clean, user-friendly interface where users can input, view, and manage events.

2. Designing the Backend
Endpoints:
    POST /addEvent: This endpoint receives start and end times and checks if the new event conflicts with existing ones. If there's an overlap, it returns an error message; otherwise, it adds the event.
    GET /getEvents: This endpoint retrieves the current list of events, which is helpful for displaying them on the frontend.

3.Overlap Logic: I used straightforward conditional checks to detect overlaps, which works well for a basic application with minimal events per day. In a larger system, indexing or database constraints might be necessary, but this approach offers simplicity and efficiency for this application.

4.CORS Support: Since the frontend and backend would run on different ports during development, enabling CORS in Express was essential. This setup would allow seamless communication between the frontend and backend.

5.Designing the Frontend
Component Structure: I created a dedicated scheduler component to handle the entire event scheduling interface. This keeps the application modular and allows for easy modifications or feature additions in the future.

6.Service for API Requests:
    I created a SchedulerService to handle all HTTP requests to the backend, ensuring that API-related logic remains separate from UI logic.

7.Form Validation:
    I added validation to ensure that start_time is less than end_time and that both values are within the allowed 0-24 range. This prevents invalid entries at the client level, enhancing usability.
    The error handling logic also ensures that if a user tries to add an overlapping event, they receive immediate feedback.
