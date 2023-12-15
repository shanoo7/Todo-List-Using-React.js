import React from 'react'
import { useCustomHook } from '../context'
import { useState } from 'react'

function TodoForm() {
  const {addTodo}=useCustomHook()
  const [ftodo,setFtodo]= useState('')


  const add=(e)=>{
    e.preventDefault()
    if(!ftodo) return
    addTodo({todo:ftodo,completed:false})
    console.log(ftodo);
    setFtodo("")
  }
  return (
   <>
   <h1 className='heading'>My Todo</h1>
   <div className='formHeading'>
    <form className='todoForm' onSubmit={add}>
        <input type='text' value={ftodo} placeholder=' write todo here...' onChange={(e)=>setFtodo(e.target.value)}/>
       <button type='submit'>add</button>
        </form>
        </div>
   </>
  )
}

export default TodoForm ; 
