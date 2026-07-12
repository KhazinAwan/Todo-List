import createProjectItem from "../projectItem/projectItem.js";

function renderProjects(projectList, projects) {

    projectList.replaceChildren();

    projects.forEach((project) => {

        const projectItem = createProjectItem(project);

        projectList.append(projectItem);

    });

}

export { renderProjects };