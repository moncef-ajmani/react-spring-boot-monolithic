import React from 'react'
import './style.scss'

const index = ({done,total}) => {
  return (
    <div className='progres'>
      <div className='progres__text'>
        <h2>Todo Done</h2>
        <p>Keep it up</p>
      </div>
      <div className='progres__state'>{done}/{total}</div>
    </div>
  )
}

export default index