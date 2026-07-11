import "./projectItem.css";

function createProjectItem(project) {

    const projectItem = document.createElement("button");
    projectItem.classList.add("projectItem");

    projectItem.textContent = project.name;

    return projectItem;

}

export default createProjectItem;