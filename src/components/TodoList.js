import React from "react";
import Todo from './Todo'
import EditTodo from "./EditTodo";
const TodoList = ({ todos, setTodos, editId, setEditId }) => {
    const renderTodo = (todo) => {
        if (todo.id == editId) {
            return (
                <EditTodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    setEditId={setEditId}
                />
            );
        }
        return (
            <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                setEditId={setEditId}
            />
        );
    };
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    todos.map((item) => (
                        renderTodo(item)
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;