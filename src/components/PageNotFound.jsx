import React, { useLayoutEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    let navigate = useNavigate();

    useLayoutEffect(() => {
        document.title ="Page Not found";
    }, [])

    let handleNavigate = () => {
        navigate("/");
    }

    return (
        <React.Fragment>
            <Container>
                <div className='page404'>
                    <h1 className='page-title'>Page Not Found</h1>
                </div>
                <div className="btn-block">
                    <Button variant="outline-primary" onClick={handleNavigate} className='pro-btn navigate-link'>Go to Login Page</Button> 
                </div>
            </Container>
        </React.Fragment>
    )
}

export default PageNotFound;