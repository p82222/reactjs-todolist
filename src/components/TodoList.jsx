import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import TodoCard from "./TodoCard"; 

export default function TodoList({ todos = [] }) {

  return (
    <ul className='main'>
      {todos.length > 0 ? (  // ✅ Ensure todos exist before mapping
        todos.map((todo, index) => (
          <TodoCard key={index}>
            <p>{todo}</p>
          </TodoCard>
        ))
      ) : (
        <p>No todos available.</p>  // ✅ Display a message if list is empty
      )}
    </ul>
  )
}