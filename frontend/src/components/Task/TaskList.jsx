import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { apiInstance } from '../../utils/Axios'
import InputTask from './InputTask'

const TaskList = ({ tasks, fetchData }) => {

  return (
    <>
      <div className='task__list'>
        {tasks.map(t=><TaskItem key={t.id} task={t} fetchData={fetchData}/>)}
      </div>
    </>
    
  )
}

export default TaskList