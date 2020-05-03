import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      
        <h3>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
        </h3>
      
    </div>
  )
}