import { configureStore } from '@reduxjs/toolkit';
import TodoReducers from "./feature/todo/todoSlice.js"


export const store=configureStore({
    reducer:TodoReducers
})
