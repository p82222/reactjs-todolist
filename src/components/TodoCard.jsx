import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 


export default function TodoCard() {
  return (
    <li className='todoitem'>
            <div className='actionsContainer'>

              <i className="fa-solid fa-pen-to-square"></i>

              <i className="fa-solid fa-trash-can"></i>
            </div>
    </li>
  )
}
