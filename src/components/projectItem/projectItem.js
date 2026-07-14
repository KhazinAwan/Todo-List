import "./projectItem.css";

function createProjectItem(project, onSelectProject) {

    const projectItem = document.createElement("button");
    projectItem.classList.add("projectItem");

    projectItem.textContent = project.name;

    projectItem.addEventListener("click", () => {

        console.log("selection", project.name);

        onSelectProject(project);

    })

    return projectItem;



}

export default createProjectItem;