import React, { useState } from 'react';

export default function TodoInput({ updateAddTodos }) {

  const [todoValue, setTodoValue] = useState('');

  const handleAddTodo =()=> {
    if(todoValue.trim() == '') return; //checking if input is empty
    updateAddTodos(todoValue) //add to todo list
    setTodoValue('') //clear input field after adding
  };

  return (
    <header>
      <input 
      value={todoValue} 
      onChange={(e) => setTodoValue(e.target.value)}
      onKeyDown={(e) => {
        if(e.key == 'Enter') handleAddTodo();
      }}
      
      placeholder="Entre todo..."/>

      <button onClick={handleAddTodo}>Add</button>
    </header>
  )
}
