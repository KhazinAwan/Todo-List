import createNavbar from "./components/navbar/navbar.js";
import createProjectSidebar from "./components/projectSidebar/projectSidebar.js";
import createTodoContainer from "./components/todoContainer/todoContainer.js";
import createTodoDialog from "./components/todoDialog/todoDialog.js";
import createProjectDialog from "./components/projectDialog/projectDialog.js";

function createApp(onAddProject, onAddTodo) {

    console.log(onAddProject);
    console.log(onAddTodo)

    const mainLayout = document.createElement("div");
    mainLayout.classList.add("mainLayout");

    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");

    const navbar = createNavbar();

    const projectSidebar = createProjectSidebar(onAddProject);
    const projectList = projectSidebar.querySelector(".projectList");
    const addProjectButton = projectSidebar.querySelector(".addProjectButton");

    const todoContainer = createTodoContainer(onAddTodo);
    const todoList = todoContainer.querySelector(".todoList");
    const addTodoButton = todoContainer.querySelector(".addTodoButton");

    const todoDialog = createTodoDialog();

    const projectDialog = createProjectDialog();

    mainContent.append(
        projectSidebar,
        todoContainer
    );

    mainLayout.append(
        navbar,
        mainContent,
        todoDialog,
        projectDialog,
    );

    return {

        root: mainLayout,

        projectList,
        todoList,

        addProjectButton,
        addTodoButton,

        todoDialog,
        projectDialog

    };

}

export default createApp;