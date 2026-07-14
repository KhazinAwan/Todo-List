import "./todoDialog.css";

function createTodoDialog(onCloseTodoDialog) {

    const dialog = document.createElement("dialog");
    dialog.classList.add("todoDialog");

    const heading = document.createElement("h2");
    heading.textContent = "Todo Details";

    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";

    const descriptionInput = document.createElement("textarea");

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";

    const priorityInput = document.createElement("select");

    ["Low", "Medium", "High"].forEach(priority => {

        const option = document.createElement("option");

        option.value = priority.toLowerCase();
        option.textContent = priority;

        priorityInput.appendChild(option);

    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("dialogButtons");

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", () => {

        onCloseTodoDialog();

    });

    buttonContainer.append(
        saveButton,
        cancelButton
    );

    form.append(
        titleLabel,
        titleInput,

        descriptionLabel,
        descriptionInput,

        dueDateLabel,
        dueDateInput,

        priorityLabel,
        priorityInput,

        buttonContainer
    );

    dialog.append(
        heading,
        form
    );

    return dialog;

}

export default createTodoDialog;