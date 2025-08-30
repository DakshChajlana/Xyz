import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETETODO, EDITTODO } from '../constants/constants'

export default function List() {
    const todos = useSelector(state=>state.todos)
    const dispatchEvent = useDispatch()
  return (
    <div>{
        todos.length>0?
    todos.map((todo , index )=>{
        return (<li>{todo}
        <button onClick={()=>dispatchEvent({
            type:DELETETODO,
            payload:index
        })}> delete</button>
        <button onClick={()=>dispatchEvent({
          type:EDITTODO,
          payload:index
        })}>edit</button>
        
        </li>)
    })
    : <p>NO TODO ADDED YET...</p>
    }
    </div>
  )
}
