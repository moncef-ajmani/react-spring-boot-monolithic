import React from 'react'
import './style.scss'
import edit_icon from '../../assets/edit.png'
import delete_icon from '../../assets/delete.png'

const TaskItem = () => {
  return (
    <div className='task__item'>
      <div className='d-flex align-items-center'>
        <div className='task__item-radio'></div>
        <div className='task__item-text'>Task 1</div>
      </div>
        <div className='d-flex align-items-center'>
          <div className='task__item-edit'><img src={edit_icon}/></div>
          <div className='task__item-delete'><img src={delete_icon}/></div>
        </div>
        
    </div>
  )
}

export default TaskItem