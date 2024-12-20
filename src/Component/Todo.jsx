import { useSelector } from "react-redux";
import Todoform from "./AddTodo";

export default function Todo(){
const todos=useSelector((state)=>state.todos);
    return(
        <>
        <Todoform/>
        <h2>Todo</h2>
        {
            todos.map((todo)=>(
            <li key={todo.id}>todo.task</li>
        ))
        }
        </>
    )
} 