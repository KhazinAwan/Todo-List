import createApp from "./App.js";
import appState from "./state/appState.js";
import Project from "./models/project.js";
import Todo from "./models/todo.js";

import { renderProjects } from "./components/projectSidebar/projectSidebarView.js";
import { renderTodos } from "./components/todoContainer/todoContainerView.js";

let ui;

function initializeDefaultProject() {

    const defaultProject = new Project("Default");

    const defaultTodo = new Todo(
        "Welcome to your Todo List!",
        "Create a new project or add a new todo to get started.",
        "2026-07-31",
        "Medium"
    );

    defaultProject.addTodo(defaultTodo);

    appState.projects.push(defaultProject);

    appState.currentProject = defaultProject;

}

function initialize() {

    const app = document.getElementById("app");

    // ui = createApp({

    //     onAddProject: openProjectDialog,

    //     onAddTodo: openTodoDialog

    // });

    ui = createApp(openProjectDialog, openTodoDialog);

    app.append(ui.root);

    initializeDefaultProject();

    renderProjects(
        ui.projectList,
        appState.projects
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos
    );

}

function openProjectDialog() {

    ui.projectDialog.showModal();

}

function openTodoDialog() {

    ui.todoDialog.showModal();

}

export { initialize };