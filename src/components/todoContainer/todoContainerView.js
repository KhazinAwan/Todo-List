import createTodoCard from "../todoCard/todoCard.js";

function renderTodos(todoList, todos) {

    todoList.replaceChildren();

    todos.forEach((todo) => {

        const todoCard = createTodoCard(todo);

        todoList.append(todoCard);

    });

}

export { renderTodos };