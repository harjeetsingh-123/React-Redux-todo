import { createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos: [{id:123 ,task:"code",isDone:false}] 
};
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        //// add todo reducer function.
        /// reducers take two  value as arguments.
        addtodo:(state,action)=>{
            const Newtodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            }
        state.todos.push(Newtodo);
        },

        /// Delete reducers.

        // eslint-disable-next-line no-unused-vars
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{todo.id!==todo.payload})
        },

        markAsDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(state.todos.id===action.payload){
                    todo.isDone=true;
                }
            })
        }
    }

})

export const {addtodo ,deletetodo ,markAsDone}=todoSlice.reducer;

export default todoSlice.reducer