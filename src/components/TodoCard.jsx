import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 


export default function TodoCard({ children, deleteTodos, index }) {
  return (
    <li className='todoitem'>
            <div className='actionsContainer'>
              { children }
              <button>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>

              <button onClick={() => {
                if(deleteTodos){                
                  deleteTodos(index)
                }
              }}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
    </li>
  )
}