import createNavbar from "./components/navbar/navbar.js";
import createProjectSidebar from "./components/projectSidebar/projectSidebar.js";
import createTodoContainer from "./components/todoContainer/todoContainer.js";
import createTodoDialog from "./components/todoDialog/todoDialog.js";
import createProjectDialog from "./components/projectDialog/projectDialog.js";

function createApp() {

    const mainLayout = document.createElement("div");
    mainLayout.classList.add("mainLayout");

    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");

    const navbar = createNavbar();

    const projectSidebar = createProjectSidebar();

    const todoContainer = createTodoContainer();

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
        projectDialog
    );

    return mainLayout;

}

export default createApp;