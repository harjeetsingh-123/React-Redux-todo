import { useState } from "react";
import { useDispatch } from "react-redux";

import {addtodo} from "../app/feature/todo/todoSlice.js"


//import {addtodo} from "../app/feature/todo/todoSlice.js"
// Error 
////  Dispatch(addtodo(task)); addtodo :undefine


// import{addtodo} from "../feature/todo/todoSlice.js"
// Error
//Failed to resolve import "../feature/todo/todoSlice."


export default function Todoform(){
    const [task,setTask]=useState("");
    const  Dispatch=useDispatch();
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(task);
        Dispatch(addtodo(task));
    }

    return(
    <>
    <form onSubmit={handleSubmit}>
        <input placeholder="Enter Todo" type="Text" onChange={(e)=>setTask(e.target.value)}/>
        <button> Add Todo </button>
    </form>
    </>
    )
}