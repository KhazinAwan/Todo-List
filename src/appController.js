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

    ui = createApp(

        openProjectDialog,
        openTodoDialog,

        closeProjectDialog,
        closeTodoDialog,

        saveProject
    );

    app.append(ui.root);

    initializeDefaultProject();

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject
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

function closeProjectDialog() {

    ui.projectDialog.close();

}

function closeTodoDialog() {

    ui.todoDialog.close();

}

function saveProject(form) {

    const formData = new FormData(form);

    const projectName = formData.get("projectName").trim();

    if (projectName === "") {

        return;

    }

    const project = new Project(projectName);

    appState.projects.push(project);

    appState.currentProject = project;

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos
    );

    form.reset();

    closeProjectDialog();

}

function selectProject(project) {

    appState.currentProject = project;

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos
    );

}

export { initialize };