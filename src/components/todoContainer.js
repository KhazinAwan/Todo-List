import "./todoContainer.css";

function createTodoContainer() {

    const todoContainer = document.createElement("main");
    todoContainer.classList.add("todoContainer");

    const heading = document.createElement("h2");
    heading.classList.add("todoContainerHeading");
    heading.textContent = "Todos";

    const todoList = document.createElement("div");
    todoList.classList.add("todoList");

    const addTodoButton = document.createElement("button");
    addTodoButton.classList.add("addTodoButton");
    addTodoButton.textContent = "+ New Todo";

    todoContainer.append(
        heading,
        todoList,
        addTodoButton
    );

    return todoContainer;

}

export default createTodoContainer;