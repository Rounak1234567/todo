const initial = {
    todos:[]
}

export const todoReducer = (state=initial,action)=>{
    switch (action.type) {
        case "GET_TODO":
           return {...state, todos:action.payload}

        case "ADD_TODO":
            return {...state, todos:[...state.todos, action.payload]}
    
        default:
            return {...state};
    }
}