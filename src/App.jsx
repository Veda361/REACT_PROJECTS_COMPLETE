import React from 'react'
import AppName from './components/AppName'
import AppTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/Todoitem2'
import './App.css'
const App = () => {
  return (
    <div className='todo-container'>
      <AppName />
      <AppTodo />
      <div className='items-container'>
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </div>
  )
}

export default App