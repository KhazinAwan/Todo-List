import "./projectDialog.css";

function createProjectDialog(onCloseProjectDialog, onSaveProject) {

    const dialog = document.createElement("dialog");
    dialog.classList.add("projectDialog");

    const heading = document.createElement("h2");
    heading.textContent = "Project";

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Project Name";
    nameLabel.htmlFor = "projectName";

    const nameInput = document.createElement("input");
    nameInput.type = "text";

    nameInput.id = "projectName";
    nameInput.name = "projectName";

    nameInput.required = true;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("dialogButtons");

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", () => {

        onCloseProjectDialog();

    });

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        onSaveProject(form);

    });

    buttonContainer.append(
        saveButton,
        cancelButton
    );

    form.append(
        nameLabel,
        nameInput,
        buttonContainer
    );

    dialog.append(
        heading,
        form
    );

    return dialog;

}

export default createProjectDialog;