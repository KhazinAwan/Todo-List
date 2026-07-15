import createApp from "./App.js";
import appState from "./state/appState.js";
import Project from "./models/project.js";
import Todo from "./models/todo.js";

import { renderProjects } from "./components/projectSidebar/projectSidebarView.js";
import { renderTodos } from "./components/todoContainer/todoContainerView.js";

let ui;
let editingTodo = null;
let todoForm;
let todoDialogHeading;
let todoSaveButton;

function initializeDefaultProject() {

    const defaultProject = new Project("Default");

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

        saveProject,
        saveTodo
    );

    app.append(ui.root);


    todoDialogHeading = ui.todoDialog.querySelector("#todoDialogHeading");
    todoSaveButton = ui.todoDialog.querySelector("#todoSaveButton");
    todoForm = ui.todoDialog.querySelector("form");

    initializeDefaultProject();

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject,
        deleteProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo

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

    editingTodo = null;

    todoForm.reset();

    todoDialogHeading.textContent = "Todo Details";

    todoSaveButton.textContent = "Save";

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
        selectProject,
        deleteProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo
    );

    form.reset();

    closeProjectDialog();

}

function selectProject(project) {

    appState.currentProject = project;

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject,
        deleteProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo
    );

}

function deleteProject(project) {

    if (appState.projects.length === 1) {

        return;

    }

    const index = appState.projects.indexOf(project);

    if (index === -1) {

        return;

    }

    appState.projects.splice(index, 1);

    if (appState.currentProject === project) {

        appState.currentProject = appState.projects[0];

    }

    renderProjects(
        ui.projectList,
        appState.projects,
        selectProject,
        deleteProject
    );

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo
    );

}

function saveTodo(form) {

    const formData = new FormData(form);

    const title = formData.get("title").trim();

    const description = formData.get("description").trim();

    const dueDate = formData.get("dueDate");

    const priority = formData.get("priority");

    if (title === "") {

        return;

    }

    if (editingTodo === null) {

        const todo = new Todo(

            title,

            description,

            dueDate,

            priority

        );

        appState.currentProject.addTodo(todo);

    }

    else {

        editingTodo.title = title;

        editingTodo.description = description;

        editingTodo.dueDate = dueDate;

        editingTodo.priority = priority;

        editingTodo = null;

    }

    todoDialogHeading.textContent = "Todo Details";
    todoSaveButton.textContent = "Save";

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo
    );

    form.reset();

    closeTodoDialog();

}

function deleteTodo(todo) {

    const index = appState.currentProject.todos.indexOf(todo);

    if (index === -1) {

        return;

    }

    appState.currentProject.todos.splice(index, 1);

    renderTodos(
        ui.todoList,
        appState.currentProject.todos,
        deleteTodo,
        editTodo
    );

}

function editTodo(todo) {

    editingTodo = todo;

    todoForm.elements.title.value = todo.title;

    todoForm.elements.description.value = todo.description;

    todoForm.elements.dueDate.value = todo.dueDate;

    todoForm.elements.priority.value = todo.priority;

    todoDialogHeading.textContent = "Edit Todo";

    todoSaveButton.textContent = "Update";

    openTodoDialog();

}


export { initialize };