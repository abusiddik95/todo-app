import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import './App.scss'
import bg from '../src/bg.jpg'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const todoKey = Math.floor(Math.random() * 100) + 1;
  
  const toggleTodo = (todoKey) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === todoKey)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: todoKey , name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  const handleClearTodos = (e) => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos);
  }

  return (
    <div className="app" style={{backgroundImage:`url(${bg})`}}>
        <div className= "todo-area">
          <h2>Make A Todo List</h2>
          <h3>Total To Do: {todos.filter(todo => !todo.complete).length}</h3>
        <input className="todo-input" ref={todoNameRef} type="text" placeholder=" Type Your To Do Here" />
        <button className="btn" onClick={handleAddTodo}>Add Todo</button>
        <button className="btn" onClick={handleClearTodos}>Clear Todo</button>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  )
}

export default App;