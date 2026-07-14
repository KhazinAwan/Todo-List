import createProjectItem from "../projectItem/projectItem.js";
import appState from "../../state/appState.js";

function renderProjects(projectList, projects, onSelectProject, onDeleteProject) {

    projectList.replaceChildren();

    projects.forEach((project) => {

        const projectItem = createProjectItem(

            project,

            onSelectProject,

            onDeleteProject

        );

        if (project === appState.currentProject) {

            projectItem.classList.add("activeProject");

        }

        projectList.append(projectItem);

    });

}

export { renderProjects };