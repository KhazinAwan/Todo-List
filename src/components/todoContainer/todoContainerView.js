import createTodoCard from "../todoCard/todoCard.js";

function renderTodos(todoList, todos, onDeleteTodo, onEditTodo, onToggleComplete) {

    todoList.replaceChildren();

    todos.forEach((todo) => {

        const todoCard = createTodoCard(todo, onDeleteTodo, onEditTodo, onToggleComplete);

        todoList.append(todoCard);

    });

}

export { renderTodos };