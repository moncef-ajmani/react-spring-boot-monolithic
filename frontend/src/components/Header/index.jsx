import React from 'react'
import './style.scss'
import logout_logo from '../../assets/logout.png'
const index = () => {
  return (
    <div className='header container'>
        <div className='header__logo'>DOMO<span>TODO</span></div>
        <div className='header__logout'>
            <img className='header__logout-logo' src={logout_logo} />
        </div>
    </div>
  )
}

export default index