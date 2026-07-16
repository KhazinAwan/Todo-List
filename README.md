# Todo List

A Todo List web application built as part of **The Odin Project** JavaScript curriculum. The application allows users to organize tasks into multiple projects, manage task details, and persist data using the browser's Local Storage.

---

## Features

### Project Management

* Create new projects
* Delete existing projects
* Switch between projects
* Prevent deletion of the last remaining project

### Todo Management

* Create todos
* Edit existing todos
* Delete todos
* Mark todos as complete/incomplete
* Expand and collapse todos to view additional details

### Todo Details

Each todo can contain:

* Title
* Description
* Due date
* Priority (Low, Medium, High)
* Completion status

### Data Persistence

* Automatically saves all projects and todos using Local Storage
* Restores data when the application is refreshed or reopened
* Remembers the last selected project

---

## Built With

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Webpack
* Local Storage API

---

## Project Structure

The application follows a modular architecture by separating responsibilities into different parts of the application:

* **Models** – `Project` and `Todo` classes
* **Components** – Reusable UI components
* **Views** – Rendering logic
* **Controller** – Application logic and event handling
* **State** – Centralized application state and persistence

---

## What I Learned

This project helped reinforce several important JavaScript concepts, including:

* ES6 Modules
* Object-Oriented Programming with Classes
* DOM manipulation
* Event handling
* Component-based application architecture
* State management
* CRUD operations
* Working with the `<dialog>` element
* Local Storage persistence
* Reconstructing class instances from JSON data
* Organizing larger JavaScript applications into maintainable modules

---

## Future Improvements

Possible enhancements for future versions include:

* Task search
* Sorting by due date or priority
* Drag-and-drop task ordering
* Due date reminders
* Categories or tags
* Dark/Light mode
* Task filtering (All / Active / Completed)
* Keyboard shortcuts
* Mobile-specific UI improvements
* Cloud synchronization with a backend database

