import React, { useState } from "react";

const EditTodo = ({ todo, todos, setTodos, setEditId }) => {
    const countCharInString = (str, ch) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            count += (str[i] === ch);
        }
        return count;
    };

    const [todoText, setTodoText] = useState(todo.text);

    const todoTextHandler = (e) => {
        setTodoText(e.target.value);
    };

    const saveHandler = (e) => {
        e.preventDefault();
        if (countCharInString(todoText, ' ') === todoText.length) {
            alert("The text can't be empty!");
            return;
        }
        setEditId(-1);
        setTodos(todos.map(
            (item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, text: todoText
                    }
                }
                return item;
            }
        ));
    };
    return (
        <form>
            <input onChange={todoTextHandler} className='edit-todo-input' type={"text"} value={todoText}></input>
            <button onClick={saveHandler} type='submit'>
                <i class="fas fa-save"></i>
            </button>
        </form>
    );
};

export default EditTodo;