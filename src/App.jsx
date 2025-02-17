import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('') 
  const [editingIndex, setEditingIndex] = useState(null) 

  function persistData(newList){
    if(Array.isArray(newList)){
      localStorage.setItem('todos', JSON.stringify({todos : newList}))
    }else{
      console.error("persistData: newList is not an array!", newList)
    }
  }

  function updateAddTodos(newTodo){
    let newTodoList = [...todos]; //Always initialize newTodoList as an array

    if(editingIndex !== null){
      newTodoList = newTodoList.map((todo, index) =>
          index === editingIndex ? newTodo : todo
      ); 
      setEditingIndex(null);
  }else{
      newTodoList.push(newTodo);
  }

  setTodos(newTodoList);
  persistData(newTodoList);
  setTodoValue("");
  }


  function deleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function editTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    setEditingIndex(index)
  }

  function clearTodos(){
    localStorage.removeItem('todos')
    setTodos([])
  }

  useEffect(() => {
    let localTodos = localStorage.getItem('todos')

    if (!localTodos) return; //check if there's no saved data
    try {
        localTodos = JSON.parse(localTodos).todos;
        if (Array.isArray(localTodos)) {
            setTodos(localTodos);
        } else {
            console.error("Invalid todos format in localStorage!", localTodos);
        }
    } catch (error) {
        console.error("Error parsing localStorage data", error);
    }
  }, [])

  return (
    <>
      {/* <TodoInput />*/}
      <button onClick={clearTodos}>Clear All Todos</button>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} updateAddTodos = {updateAddTodos} />
       {/* <TodoList />*/}
       <TodoList editTodos = {editTodos} deleteTodos = {deleteTodos} todos = {todos}/>
    </>
  );
}

export default App;
