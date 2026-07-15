import createTodoCard from "../todoCard/todoCard.js";

function renderTodos(todoList, todos, onDeleteTodo, onEditTodo) {

    todoList.replaceChildren();

    todos.forEach((todo) => {

        const todoCard = createTodoCard(todo, onDeleteTodo, onEditTodo);

        todoList.append(todoCard);

    });

}

export { renderTodos };