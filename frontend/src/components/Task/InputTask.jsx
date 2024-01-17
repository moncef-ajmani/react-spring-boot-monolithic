import React, { useRef } from 'react'
import './style.scss'
import plus_icon from '../../assets/plus-symbol-button.png'
import { apiInstance } from '../../utils/Axios'
import { useAuth } from '../../Contexts/AuthContext'
const InputTask = ({ fetchData }) => {

  const task = useRef()

  const handleClick = () =>{
    if(task.current.value !== ""){
      apiInstance.post("/tasks",{"title":task.current.value})
      .then(({data})=>{
        console.log(data)
        task.current.value = ""
        fetchData()

      })
    }else{
      alert("Task Title Should not be Empty")
    }
    
  }
  return (
    <div className='add__task'>
        <input type="text" name="add_task" id="add_task" placeholder='write your next task' ref={task}/>
        <div className='add__task-btn box-shadow'><img src={plus_icon} alt="add" onClick={handleClick}/></div>
    </div>
  )
}

export default InputTask