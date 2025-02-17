import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('') 
  const [editingIndex, setEditingIndex] = useState(null) 

  function updateAddTodos(newTodo){
    
    if(editingIndex !== null){
      const newTodoList = todos.map((todo, index)=>
        index === editingIndex? newTodo:todo
      )
      setTodos(newTodoList)
      setEditingIndex(null)
    }else{
      setTodos([...todos, newTodo])

    }
    setTodoValue("")
  }


  function deleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function editTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    setEditingIndex(index)
  }

  return (
    <>
      {/* <TodoInput />*/}
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} updateAddTodos = {updateAddTodos} />
       {/* <TodoList />*/}
       <TodoList editTodos = {editTodos} deleteTodos = {deleteTodos} todos = {todos}/>
    </>
  );
}

export default App;
