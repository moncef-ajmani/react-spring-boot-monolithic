import React, { useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'

const Register = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div className='header__auth-btn box-shadow' onClick={handleShow}>Register</div>

    <Modal show={show} onHide={handleClose} className='modal'>
        <h2 className='modal-title'>Register Form</h2>    
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div className='modal-btn'>Register</div>
        </Form.Group>
        <Form.Group>
            <p>Already have an account? <a href='#'>Login</a></p>
        </Form.Group>
        </Form>
    </Modal>
    </>
  )
}

export default Register