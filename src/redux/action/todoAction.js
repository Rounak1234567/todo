export const getTodo = ()=>{
    return{
        type:"GET_TODO"
    }
}



export const addTodo = (todo)=>{
    return{
        type:"ADD_TODO",
        payload: todo
    }
}