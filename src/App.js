import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [editId, setEditId] = useState(-1);


  return (
    <div className='app'>
      <header>
        <h1>React ToDo app </h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        nextId={nextId}
        setNextId={setNextId}
      />

      <TodoList
        editId={editId}
        setEditId={setEditId}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
export default App;
