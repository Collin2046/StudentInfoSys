import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Alert, TextField } from '@mui/material';
import backimg from './BackImg.jpg';





export default function Login() {
    let navigate = useNavigate();
    
    
    const signin = (prop) => {

        if (prop === "Success") {
            alert("Login Successful!")
            
            navigate('/main')
        }
        else {
            alert(prop)
            navigate('/')
        }
    }

    const [accountIn, setAccountIn] = useState();
    const [passwordIn, setPasswordIn] = useState();
    const [res, setRes] = useState("");
    //const [login,setLogIn]=useState();
    return (
        <div className="welcomeTitle" style={{ backgroundImage: `url(${backimg})` }} >
            <center>
                <br />
                <div >
                    <h1>Student Information System</h1>
                </div>

                <div>
                    <h2>Welcome Admin</h2>
                </div>

                <div>
                    <h3>Please log in.</h3>
                </div>
                <br />

                
                    <center>
                        <TextField variant="outlined" size='small' label='Account' onChange={e => setAccountIn(e.target.value)}></TextField>
                    </center>
                    <br />
                    <center>
                        <TextField variant="outlined" size='small' label='Password' type={"password"} onChange={e => setPasswordIn(e.target.value)}></TextField>
                    </center>
                

                <br />


            </center>

            <Button className='loginB' color="success" size='small' variant="contained" onClick={() => {
                axios.post('http://localhost:8080/login/check', {
                    account: accountIn,
                    password: passwordIn
                }).then(function (response) {
                    // handle success
                    console.log(response);
                    signin(response.data);
                })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }} >Sign In</Button>

            <Button className='signupB' color="success" variant="contained" size='small' onClick={() => { navigate('/signup') }}>Sign Up</Button>




        </div>
    );
}

