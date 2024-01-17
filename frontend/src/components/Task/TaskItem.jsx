import React, { useRef, useState } from 'react'
import './style.scss'
import edit_icon from '../../assets/edit.png'
import delete_icon from '../../assets/delete.png'
import { apiInstance } from '../../utils/Axios'

const TaskItem = ({ task, fetchData}) => {
  const { id, title, status} = task
  const [edit,setEdit] = useState(false)
  const update = useRef()
  const handleTaskClick = () =>{
    console.log("handleTaskClick",status)

    apiInstance.patch(`tasks/${id}/updateStatus`,{
      "status":status == "COMPLETED" ? "INPROGRESS":"COMPLETED"
    })
    .then((data)=>{
      console.log(data)
      fetchData()
    })
  }
  const handleEditClick = () =>{
    console.log("handleEditClick")
    setEdit(true)
  }
  const handleDeleteClick = () =>{
    apiInstance.delete(`tasks/${id}`)
    .then((data)=>{
      console.log(data)
      fetchData()
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`Update from ${title} to ${update.current.value}`)
    apiInstance.patch(`tasks/${id}/updateTitle`,{
      "title":update.current.value
    })
    .then((data)=>{
      console.log(data)
      fetchData()
    })
    setEdit(false)
  }
  return (
    <div className={`task__item ${status == "COMPLETED" && 'done'}`} >
      <div className='d-flex align-items-center'>
        <div className='task__item-radio'></div>
        {edit?(
          <form onSubmit={handleSubmit}>
            <input type='text' className='form-control' defaultValue={title} ref={update}/>
          </form>
        ):(
        <div className='task__item-text' onClick={handleTaskClick}>{title}</div>
        )}
      </div>
        <div className='d-flex align-items-center'>
          <div className='task__item-edit'><img src={edit_icon} onClick={handleEditClick}/></div>
          <div className='task__item-delete'><img src={delete_icon} onClick={handleDeleteClick}/></div>
        </div>
    </div>
  )
}

export default TaskItem