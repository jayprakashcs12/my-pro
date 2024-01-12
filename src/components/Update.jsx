import React, { useLayoutEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axiosInstance from '../helpers/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'

const Update = () => {

    let [showPass, setShowPass] = useState(false);

    let handleTogglePass = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    let {id} = useParams()
    let navigate = useNavigate() ; 

    useLayoutEffect(() => {
        document.title = "Update Page"
    });

    let [fullName, setFullName] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [emailID, setEmailID] = useState("");
    let [password, setPassword] = useState("");

    useLayoutEffect(()=>{
        let fetchdata = async()=>{
            let {data} = await axiosInstance.get(`/contacts/${id}`)
            setFullName(data.fullName);
            setMobileNo(data.mobileNo);
            setEmailID(data.emailID);
            setPassword(data.password);
        }
        fetchdata()
    },[id])


    let updateUser = (e)=>{
        e.preventDefault()
        let payload ={
            fullName, mobileNo, emailID, password
        }
        axiosInstance.put(`contacts/${id}` , payload)
        toast.info(`${fullName} updated successfully...!`);
        navigate("/dashboard")
    }

    let handleNavigate = () => {
        navigate("/dashboard");
    }

    return (
        <React.Fragment>
            <Container fluid className='login-div'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h2 className='login-text'>User Update</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control className='form-input' type="text" name="fullName" value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="Enter Your Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control className='form-input' type="tel" name="mobileNo" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Enter Your Mobile Number"
                                onKeyPress={(e) => {if(!/[0-9]/.test(e.key)){e.preventDefault();}}} maxLength={10} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>eMail ID</Form.Label>
                                <Form.Control className='form-input' type="email" name="emailID" value={emailID} onChange={(e)=>setEmailID(e.target.value)} placeholder="Enter Your eMail ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={showPass ? 'text' : 'password'} className='form-input' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" />
                                <i className={`toggle-pass bi ${showPass ? 'bi-eye' : 'bi-eye-slash'}`} onClick={handleTogglePass}></i>
                            </Form.Group>
                            <div className="btn-div">
                                <Button variant="outline-primary" className='pro-btn log-btn' onClick={updateUser}>Update</Button>
                                <Button variant="outline-secondary" className='pro-btn can-btn' onClick={handleNavigate}>Cancel</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container> 
        </React.Fragment>
    )
}

export default Update;