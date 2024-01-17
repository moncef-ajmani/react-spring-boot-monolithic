import React, { useRef, useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'
import { apiInstance } from '../utils/Axios';
import { useAuth } from '../Contexts/AuthContext';

const Register = ({handleShowLogin, handleShow, handleClose, show}) => {
    

    const email = useRef()
    const password = useRef()
    const password1 = useRef()
    const username = useRef()

    const { login } = useAuth()

  

    const handleSubmit = () =>{
        console.log("HandleSubmit")
        if (password.current.value == password1.current.value){
            apiInstance.post("/auth/register",{
                "username":username.current.value,
                "email":email.current.value,
                "password":password.current.value
            })
            .then(({data})=>{
                console.log(data)
                login(data.token)
                handleClose()
            })
        }else{
            alert("Confirm Password :)")
        }
        
    }
    return (
    <>
    <div className='header__auth-btn box-shadow' onClick={handleShow}>Register</div>

    <Modal show={show} onHide={handleClose} className='modal'>
        <h2 className='modal-title'>Register Form</h2>    
        <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Usrename</Form.Label>
            <Form.Control type="email" placeholder="Your Username" ref={username}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" ref={email}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Your Password" ref={password}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" ref={password1} />
        </Form.Group>
        <Form.Group className="mb-3" >
            <div className='modal-btn' onClick={handleSubmit}>Register</div>
        </Form.Group>
        <Form.Group>
            <p>Already have an account? <span onClick={()=>{
                handleClose()
                handleShowLogin()
            }}>Login</span></p>
        </Form.Group>
        </Form>
    </Modal>
    </>
  )
}

export default Register