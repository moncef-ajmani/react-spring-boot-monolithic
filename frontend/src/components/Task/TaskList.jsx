import React from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
  return (
    <div className='task__list'>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
    </div>
  )
}

export default TaskList