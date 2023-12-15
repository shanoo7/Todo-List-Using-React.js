import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useCustomHook } from "./context";
import "./App.css"


function App() {
  const{todos}=useCustomHook()
  return (
    <>
    <div className="mainHeading">
      <TodoForm/>
      {todos.map((todo)=>(
       <div key={todo.id}>
        <TodoList data={todo}/>
       </div>
      ))}
      </div>
    </>
  )
}

export default App;
