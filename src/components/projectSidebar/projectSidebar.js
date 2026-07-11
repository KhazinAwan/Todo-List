import "./projectSidebar.css";

function createProjectSidebar() {

    const sidebar = document.createElement("aside");
    sidebar.classList.add("projectSidebar");

    const heading = document.createElement("h2");
    heading.classList.add("projectSidebarHeading");
    heading.textContent = "Projects";

    const projectList = document.createElement("div");
    projectList.classList.add("projectList");

    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("addProjectButton");
    addProjectButton.textContent = "+ New Project";

    sidebar.append(
        heading,
        projectList,
        addProjectButton
    );

    return sidebar;

}

export default createProjectSidebar;