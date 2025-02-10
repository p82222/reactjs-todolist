import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  let todos =[
    'Go to the gym',
    'Buy food',
    'File the tax'
  ]

  return (
    <>
      {/* <TodoInput />*/}
      <TodoInput />
       {/* <TodoList />*/}
       <TodoList todos = {todos}/>
    </>
  );
}

export default App;
