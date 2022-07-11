import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, nextId, setNextId }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const countCharInString = (str, ch) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            count += (str[i] === ch);
        }
        return count;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (countCharInString(inputText, ' ') === inputText.length) {
            alert("The text can't be empty!");
            return;
        }
        setTodos([
            ...todos,
            {
                id: nextId,
                text: inputText,
                completed: false,
            }
        ]);
        setNextId(nextId + 1);
        setInputText("");
    };

    return (
        <form>
            <input onChange={inputTextHandler} className='todo-input' type={"text"} value={inputText}></input>
            <button onClick={submitHandler} type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
        </form>
    );
};
export default Form;