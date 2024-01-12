import React from 'react'
import axiosInstance from "../helpers/axiosInstance";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Container, Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from './Header';


const Dashboard = () => {

    let [users, setUsers] = useState([]);

    useLayoutEffect(() => {
        document.title ="Software";
        let fetchdata = async () => {
            let { data } = await axiosInstance.get("/contacts")
            setUsers(data);
        }
        fetchdata()
    }, [])


    let handleDelete = (id) => {
        console.log(id);
        axiosInstance.delete(`contacts/${id}`);
        toast.info(`${id} deleted successfully...! `);
        window.location.assign("/dashboard")
    }

    return (
        <React.Fragment>
            <Header />
            <Container style={{marginTop:"100px"}}>
                <h2>Users List</h2>
                <div className="pro-table">
                    <Table striped bordered hover responsive="lg">
                        <thead>
                            <tr>
                                <th className='pro-row'>Sl. No.</th>
                                <th className='pro-row'>Profile Photo</th>
                                <th className='pro-data'>Full Name</th>
                                <th className='pro-row'>Mobile No.</th>
                                <th className='pro-data'>Email ID</th>
                                <th className='pro-data'>Address</th>
                                <th className='pro-row' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((x, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className='pro-row'> {x.id} </td>
                                            <td className='pro-row'> <Image className='pro-img' rounded src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.fullName}`} alt={x.fullName} />  </td>
                                            <td className='pro-data'> {x.fullName} </td>
                                            <td className='pro-data'>
                                                {x.mobileNo  &&  <>+91-{x.mobileNo}</> }
                                            </td>
                                            <td className='pro-data'> {x.emailID} </td>
                                            <td className='pro-data'> {x.address} </td>
                                            <td className='pro-row'>
                                                <div className="dash-div">
                                                    <Link id='links' to={`/update/${x.id}`}>
                                                        <CreateOutlinedIcon className='toggle-icon upd-icon' />
                                                    </Link>
                                                    <DeleteOutlinedIcon className='toggle-icon del-icon' onClick={() => {handleDelete(x.id)}} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard
