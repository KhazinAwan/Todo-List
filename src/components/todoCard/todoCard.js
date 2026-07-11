import "./todoCard.css";

function createTodoCard(todo) {

    const todoCard = document.createElement("article");
    todoCard.classList.add("todoCard");

    const todoInfo = document.createElement("div");
    todoInfo.classList.add("todoInfo");

    const title = document.createElement("h3");
    title.classList.add("todoTitle");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.classList.add("todoDueDate");
    dueDate.textContent = todo.dueDate;

    todoInfo.append(
        title,
        dueDate
    );

    const actions = document.createElement("div");
    actions.classList.add("todoActions");

    const editButton = document.createElement("button");
    editButton.classList.add("editTodoButton");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteTodoButton");
    deleteButton.textContent = "Delete";

    actions.append(
        editButton,
        deleteButton
    );

    todoCard.append(
        todoInfo,
        actions
    );

    return todoCard;

}

export default createTodoCard;