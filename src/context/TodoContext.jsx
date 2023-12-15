import { createContext, useContext, useEffect, useState } from "react";

//createContext
const CreateContext = createContext({
    myTodos:[
        {
        id:"",
        todo:"",
        completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}


   
})
//customHook
const useCustomHook = ()=> useContext(CreateContext)

//providerFunction
const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    //addTodo
    const addTodo =(todo)=>{
        setTodos((pre)=>[{id:Date.now(),...todo},...pre])
    }
    //updateTodo
    const updateTodo =(id,todo)=>{
        setTodos((pre)=>pre.map((preTodo)=>(
            preTodo.id === id ? todo : preTodo
        )))
    }
    //deleteTodo
    const deleteTodo =(id)=>{
        setTodos((pre)=>pre.filter((filterTodo)=>{
           return filterTodo.id !==id
        }))
    }
    //toggleComplete
    const toggleComplete =(id)=>{
        setTodos((pre)=>pre.map((preTodo)=>(
            preTodo.id === id ?{...preTodo, completed: !preTodo.completed}:preTodo
        )))
    }

    //localstorage
    useEffect(()=>{
      const getItem= JSON.parse(localStorage.getItem("todos"))
      if(getItem && getItem.length>0)
      setTodos(getItem)
    console.log(getItem)
    },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return (
        <CreateContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
            {children}
        </CreateContext.Provider>
    )
}


export { ContextProvider, useCustomHook };
