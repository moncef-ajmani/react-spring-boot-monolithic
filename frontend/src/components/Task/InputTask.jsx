import React from 'react'
import './style.scss'
import plus_icon from '../../assets/plus-symbol-button.png'
const InputTask = () => {
  return (
    <div className='add__task'>
        <input type="text" name="add_task" id="add_task" placeholder='write your next task'/>
        <div className='add__task-btn'><img src={plus_icon} alt="add" /></div>
    </div>
  )
}

export default InputTask