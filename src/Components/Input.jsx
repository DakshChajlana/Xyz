import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTODOD, EDITING } from '../constants/constants'

export default function Input() {
const [ text ,setText ] = useState ("")
const dispatch = useDispatch()
const {todos , editIndex } = useSelector(state=>state)
useEffect(()=>{
  if(editIndex != null){
  setText(todos[editIndex])
  }
  else{
    setText("")
  }
},[editIndex])




  return (
    <div>
      <input type="text" onChange={(e)=>setText (e.target.value)} value={text}/>
      {
        editIndex != null ?
        <button onClick={()=>{dispatch({
          type:EDITING,
          payload:text
        })}}>update todo</button>
      :
      <button onClick={()=>{dispatch({
        type:ADDTODOD,
        payload: text
      })
      setText("")}}>ADD TODO</button>

    }
    </div>
  )
}
