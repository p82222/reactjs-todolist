import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import TodoCard from "./TodoCard"; 

export default function TodoList({ todos = [], deleteTodos }) {

  return (
    <ul className='main'>
      {todos.length > 0 ? (  //checking if todo list is empty
        todos.map((todo, todoIndex) => (
          <TodoCard 
          key={todoIndex} 
          index ={todoIndex}
          deleteTodos ={deleteTodos}
          >
            <p>{todo}</p>
          </TodoCard>
        ))
      ) : (
        <p>No todos available.</p>  // if todo list is empty, will display error msg
      )}
    </ul>
  )
}