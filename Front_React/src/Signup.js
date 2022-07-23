import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import backimg from './BackImg.jpg';

function Signup() {
    let navigate = useNavigate();
    const signup = (prop) => {
    
        if (prop) {
            alert("Register successfull");
            navigate('/')
        }
        else {
            alert("Fail, please try a new account name");
        }
    
    }
    const realCode="ROOM9527";
    const [accountUp, setAccountUp] = useState(null);
    const [passwordUp, setPasswordUp] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [Acode, setAcode] = useState(null);
    return (
        <div className="signupPage" style={{ backgroundImage: `url(${backimg})` }}>
            <center>
                <div>
                    <h1>Hi! welcome to use student information system</h1>
                    <h1>Please register below</h1>
                </div>
            <div>
                 <TextField label='Account' size='small' onChange={e => setAccountUp(e.target.value)} ></TextField>

            </div>
            <br/>
            <div>
                <TextField label='Password' size='small' type={'password'} onChange={e => setPasswordUp(e.target.value)}></TextField>
            </div>
            <br/>
            <div>
                <TextField label='First Name' size='small'  onChange={e => setFirstname(e.target.value)}></TextField>
            </div>
            <br/>
            <div>
                <TextField label='Last Name' size='small'  onChange={e => setLastname(e.target.value)}></TextField>
            </div>
            <br/>
            <div>
                <TextField label='Authentication Code' size='small'  onChange={e => setAcode(e.target.value)}></TextField>
            </div>
            <br/>
            <Button variant='contained' size='small' onClick={() => {if(passwordUp==null||accountUp==null||Acode==null||firstname==null||lastname==null)
            {
                alert("Please complete your account setting")
                return}
                else if(Acode!=realCode){
                    alert("Authentication code is illegal")
                    return
                }
                axios.post('http://localhost:8080/login/signup', {
                    account: accountUp,
                    password: passwordUp,
                    firstname:firstname,
                    lastname:lastname
                }).then(function (response) {
                    // handle success
                    console.log(response);
                    signup(response.data)
                })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }}>Sign Up</Button>

            
            </center>
            
        </div>
    )
}
export default Signup