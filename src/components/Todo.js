import React from 'react'
import { confirm } from 'react-confirm-box';

const Todo = ({ todo, todos, setTodos, setEditId }) => {

    const deleteHandler = async () => {
        const result = await confirm("Are you sure?");
        if (result) {
            setTodos(todos.filter((item) => item.id !== todo.id));
            return;
        }
    };

    const completeHandler = () => {
        setTodos(todos.map(
            (item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            }
        ));
    };

    const editHandler = () => {
        setEditId(todo.id);
    };

    const completeButtonClassName = todo.completed ? "fas fa-check" : "far fa-square";
    return (
        <div className='todo' >
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} > {todo.text} </li>

            <button onClick={editHandler} className='edit-btn'>
                <i className="fas fa-edit"></i>
            </button>

            <button onClick={deleteHandler} className='trash-btn'>
                <i className="fas fa-trash" ></i>
            </button>

            <button onClick={completeHandler} className='complete-btn'>
                <i class={`${completeButtonClassName}`}></i>
            </button>
        </div>
    );
};

export default Todo;