import React, { useRef, useState } from 'react'
import { Modal,Form } from 'react-bootstrap'
import { useAuth } from '../Contexts/AuthContext';
import { apiInstance } from '../utils/Axios'
const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const email = useRef("")
    const password = useRef("")

    const { login } = useAuth() 

    const handleSubmit = () =>{
        console.log("HandleSubmit")
        apiInstance.post("/auth/login",{
            "email":email.current.value,
            "password":password.current.value
        })
        .then(({data})=>{
            console.log(data)
            login(data.token)
            handleClose()
        })
    }
    return (
    <>
    <div className='header__auth-btn box-shadow' onClick={handleShow}>Login</div>

    <Modal show={show} onHide={handleClose} className='modal'>
        <h2 className='modal-title'>Login Form</h2>    
        <Form >
        <Form.Group className="mb-3" controlId="exampleForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" ref={password}/>
        </Form.Group>
        <Form.Group className="mb-3" >
           <a href='#'>Forgot Password?</a>
        </Form.Group>
        <Form.Group className="mb-3" >
            <div className='modal-btn' onClick={handleSubmit}>Login</div>
        </Form.Group>
        <Form.Group>
            <p>Not a member? <a href='#'>Signup now</a></p>
        </Form.Group>
        </Form>
    </Modal>
    </>
  )
}

export default Login