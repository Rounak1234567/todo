import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../redux/action/todoAction";

const Home = ()=>{

    const todos = useSelector((state)=>state.todos)   
    console.log(todos)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addTodo("Learn Vue"))
    },[])

    


    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export {Home}