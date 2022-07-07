import axios from "axios"



export const getTodo = ()=> async(dispatch)=>{
    const res = await axios.get("http://localhost:3004/todo");
    dispatch({
        type:"GET_TODO",
        payload:res.data
    })
}



export const addTodo = (todo)=> async (dispatch)=>{
    console.log(todo)
    const res = await axios.post("http://localhost:3004/todo", todo);
    dispatch({
        type:"ADD_TODO",
        payload:todo
    })
}