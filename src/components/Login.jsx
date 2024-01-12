import React, { useLayoutEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');

    let [showPass, setShowPass] = useState(false);

    let handleTogglePass = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    let navigate = useNavigate();

    useLayoutEffect(() => {
        document.title = "Login Page"
    });

    let handleLogin = () => {
        navigate("/dashboard");
    };

    let handleNavigate = () => {
        navigate("/register");
    }

    return (
        <React.Fragment>
            <Container fluid className='login-div'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h2 className='login-text'>User Login</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>eMail ID</Form.Label>
                                <Form.Control className='form-input' type="email" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your eMail ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={showPass ? 'text' : 'password'} className='form-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                                <i className={`toggle-pass bi ${showPass ? 'bi-eye' : 'bi-eye-slash'}`} onClick={handleTogglePass}></i>
                            </Form.Group>
                            <div className="btn-div">
                                <Button variant="outline-primary" className='pro-btn log-btn' onClick={handleLogin}>Log In</Button>
                                <Button variant="outline-secondary" className='pro-btn can-btn'>Cancel</Button>
                            </div>
                            <div className="link-div">
                                <span>Not Registered ?</span> <Button variant="outline-primary" onClick={handleNavigate} className='pro-btn forget-btn'>Click Here</Button> 
                            </div>
                        </Form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container> 
        </React.Fragment>
    )
}

export default Login;