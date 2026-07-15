import createTodoCard from "../todoCard/todoCard.js";

function renderTodos(todoList, todos, onDeleteTodo) {

    todoList.replaceChildren();

    todos.forEach((todo) => {

        const todoCard = createTodoCard(todo, onDeleteTodo);

        todoList.append(todoCard);

    });

}

export { renderTodos };