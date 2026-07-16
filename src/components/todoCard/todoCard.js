import "./todoCard.css";

function createTodoCard(todo, onDeleteTodo, onEditTodo, onToggleComplete) {

    const todoCard = document.createElement("article");
    todoCard.classList.add("todoCard");

    const todoContent = document.createElement("div");
    todoContent.classList.add("todoContent");

    const todoInfo = document.createElement("div");
    todoInfo.classList.add("todoInfo");

    let expanded = false;

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");

    if (todo.completed) {

        const tick = document.createElement("span");

        tick.classList.add("completedTick");

        tick.textContent = "✓";

        titleContainer.append(tick);

    }

    const title = document.createElement("h3");
    title.classList.add("todoTitle");
    title.textContent = todo.title;

    titleContainer.append(title);


    const dueDate = document.createElement("p");
    dueDate.classList.add("todoDueDate");
    dueDate.textContent = `Due Date: ${todo.dueDate}`;

    todoInfo.append(
        titleContainer,
        dueDate
    );

    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todoDetails");

    const description = document.createElement("p");
    description.textContent = `Description: ${todo.description}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;

    todoDetails.append(

        description,

        priority

    );

    todoDetails.style.display = "none";

    const actions = document.createElement("div");
    actions.classList.add("todoActions");

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeTodoButton");
    completeButton.textContent = todo.completed ? "Undo" : "Complete";

    completeButton.addEventListener("click", (event) => {

        event.stopPropagation();

        onToggleComplete(todo);

    });

    const editButton = document.createElement("button");
    editButton.classList.add("editTodoButton");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", (event) => {

        event.stopPropagation();

        onEditTodo(todo);

    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteTodoButton");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", (event) => {

        event.stopPropagation();

        onDeleteTodo(todo);

    });

    actions.append(
        completeButton,
        editButton,
        deleteButton
    );

    todoContent.append(
        todoInfo,
        todoDetails
    );

    todoCard.append(
        todoContent,
        actions
    );

    todoCard.addEventListener("click", () => {

        expanded = !expanded;

        todoDetails.style.display = expanded ? "block" : "none";

    });

    if (todo.completed) {

        todoCard.classList.add("completedTodo");

    }

    return todoCard;

}

export default createTodoCard;