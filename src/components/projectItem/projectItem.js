import "./projectItem.css";
import deleteIcon from "../../assets/svgs/delete.svg";

function createProjectItem(project, onSelectProject, onDeleteProject) {

    const projectItem = document.createElement("button");
    projectItem.classList.add("projectItem");

    const projectName = document.createElement("span");
    projectName.textContent = project.name;
    

    const deleteButton = document.createElement("img");
    deleteButton.src = deleteIcon;
    deleteButton.alt = "Delete Project";
    deleteButton.classList.add("deleteProjectButton");

    projectItem.append( projectName );

    if (project.name !== "Default") {

        projectItem.append(deleteButton);

    }

    projectItem.addEventListener("click", () => {

        console.log("selection", project.name);

        onSelectProject(project);

    });

    deleteButton.addEventListener("click", (event) => {

        event.stopPropagation();

        onDeleteProject(project);

    });

    return projectItem;

}

export default createProjectItem;