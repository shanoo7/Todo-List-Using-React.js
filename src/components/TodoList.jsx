import React from 'react'
import { useCustomHook } from '../context'
import { useState } from 'react'

function TodoList({ data }) {
  const { ...todo } = data;
  const { deleteTodo, updateTodo, toggleComplete } = useCustomHook()

  const [isEditableTodo, setIsEditableTodo] = useState(false)
  const [msgTodo, setMsgTodo] = useState(todo.todo)

  const edit = () => {
    updateTodo(todo.id, { ...todo, todo: msgTodo })
    setIsEditableTodo(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }



  return (
    <>
      <div className='listHeading'>
        <div className='todoList'>
          <input className='checkBox' type='checkbox' checked={todo.completed} onChange={toggleCompleted} />

          <input className={`${todo.completed ? "listInput2" : "listInput"}`} type='text' value={msgTodo}
            onChange={(e) => setMsgTodo(e.target.value)} readOnly={!isEditableTodo} />

          <button style={{
            width: "30px",
            marginRight: "5px",
            border: "none",
            borderRadius: "2px"
          }}
            onClick={() => {
              if (todo.completed) return
              isEditableTodo?edit():setIsEditableTodo((pre)=>!pre)
             }}
            disabled={todo.completed}
          >
            {isEditableTodo ? "📁" : "🖊"}
          </button>

          <button style={{ border: "none", borderRadius: "2px", marginRight: "5px" }} onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
      </div>
    </>
  )
}

export default TodoList
