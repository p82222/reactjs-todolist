import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import TodoCard from "./TodoCard"; 

export default function TodoList() {

  let todos =[
    'Go to the gym',
    'Buy food',
    'File the tax'
  ];


  return (
    <ul className='main'>
      {todos.map((todo, index) => {
        return (
         <TodoCard key={index}>
          <p>{todo}</p>
         </TodoCard>

         /*
          <li className='todoitem' key={index}>
            {todo} 
            <i className="fa-solid fa-pen-to-square"></i>
          </li>
          */
        )
      })}
    </ul>
  )
}