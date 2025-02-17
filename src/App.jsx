import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])

  function updateAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }


  function deleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function editTodos(){}

  return (
    <>
      {/* <TodoInput />*/}
      <TodoInput updateAddTodos = {updateAddTodos} />
       {/* <TodoList />*/}
       <TodoList deleteTodos = {deleteTodos} todos = {todos}/>
    </>
  );
}

export default App;
