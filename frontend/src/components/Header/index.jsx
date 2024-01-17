import React, { useState } from 'react'
import logout_logo from '../../assets/logout.png'
import Login from '../Login'
import Register from '../Register'
import './style.scss'
import { useAuth } from '../../Contexts/AuthContext'

const index = () => {

  const { isLoggedIn, logout } = useAuth()
  const [showLogin, setShowLogin] = useState();

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

  return (
    <div className='header container'>
        <div className='header__logo'>DOMO<span>TODO</span></div>
        {!isLoggedIn ? (
          <div className='header__auth'>
            <Register show={showRegister} handleShowLogin={handleShowLogin} handleClose={handleCloseRegister} handleShow={handleShowRegister}/>
            <Login show={showLogin} handleClose={handleCloseLogin} handleShow={handleShowLogin} handleShowRegister={handleShowRegister}/>
          </div>
        ):(
          <div className='header__logout'>
            <img className='header__logout-logo' src={logout_logo} onClick={logout}/>
          </div>
        )}
    </div>
  )
}

export default index