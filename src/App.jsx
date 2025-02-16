import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])

  function updateAddTodos(newTodo){

    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)

  }

  return (
    <>
      {/* <TodoInput />*/}
      <TodoInput updateAddTodos = {updateAddTodos} />
       {/* <TodoList />*/}
       <TodoList todos = {todos}/>
    </>
  );
}

export default App;
