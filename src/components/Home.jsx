import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {  addTodo, getTodo } from "../redux/action/todoAction";

const Home = ()=>{

    const [todo, setTodo] = useState("")

    const todos = useSelector((state)=>state.todos)   
    console.log(todos)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodo())
    },[dispatch])

    
    const handleAdd = ()=>{
        const data = {
            name:todo
        }
        dispatch(addTodo(data))
    }

    return(
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="Add Todo" onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <div>
                <h2>Todos</h2>
                {
                    todos.todos.map((el,i)=>{
                        return(
                            <p key={i}>{el.name}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {Home}