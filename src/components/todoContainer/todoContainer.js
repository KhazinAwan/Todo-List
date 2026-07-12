import "./todoContainer.css";

function createTodoContainer() {

    const todoContainer = document.createElement("main");
    todoContainer.classList.add("todoContainer");

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todoHeader");

    const heading = document.createElement("h2");
    heading.classList.add("todoContainerHeading");
    heading.textContent = "Todos";

    const addTodoButton = document.createElement("button");
    addTodoButton.classList.add("addTodoButton");
    addTodoButton.textContent = "+ New Todo";

    todoHeader.append(
        heading,
        addTodoButton
    );

    const todoList = document.createElement("div");
    todoList.classList.add("todoList");

    todoContainer.append(
        todoHeader,
        todoList
    );

    return todoContainer;

}

export default createTodoContainer;