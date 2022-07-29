import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import backimg from './MainBack.jpg';
import Button from '@mui/material/Button';
import { Alert, Avatar, TextField, } from "@mui/material";
import { deepOrange, deepPurple, green, yellow } from '@mui/material/colors';
import login from './Login'



function Main() {
    
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [level, setLevel] = useState(null);
    const [gpa, setGpa] = useState(null);
    const [post, setPost] = useState(null);
    const [getone, setGetOne] = useState("empty")
    const [add, setAdd] = useState(null);
    const [dele, setDele] = useState(null);
    const [update, setUpdate] = useState(null);
    
    var user=sessionStorage.getItem('token');
    var head=user;
    var sec;
    for(var i=0;i<head.length;i++)
    {
        if(head[i-1]==" ")
        {
            sec=head[i];
        }
    }
    head=head[1];
    head=head+sec;
    console.log(head);
    
    const addNew = (e) => {
        if (e == true) {
            return (
                <div>
                    <br />
                    <Alert severity="success">Add operation successful!</Alert>
                </div>
            )
        }


    }
    const deleById = (e) => {

        if (e != null) {
            if (e == true) {
                return (
                    <div>
                        <br />
                        <Alert severity="success">Deletion operation successful!</Alert>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <br />
                        <Alert severity="error">Deletion operation failed! No such student</Alert>
                    </div>
                )
            }
        }
    }
    const updataById = (e) => {
        if (e != null) {
            if (e == true) {
                return (
                    <div>
                        <br />
                        <Alert severity="success">Update operation successful!</Alert>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <br />
                        <Alert severity="error">Update operation failed! No such student</Alert>
                    </div>
                )
            }
        }
    }
    const display = (e) => {
        if (e != null) {
            return <div>
                {e.map(student => <p key={student.id}>{`Id: ${student.id}, Name: ${student.name}, Age: ${student.age}, Level: ${student.level}, Gpa: ${student.gpa} `}</p>)}

            </div>
        }

    }
    const getById = (e) => {
        if (e != "empty") {
            if (e != null) {

                return <div>
                    Id: {e.id}, Name: {e.name}, Age: {e.age}, Level:{e.level}, Gpa:{e.gpa}
                </div>
            }
            else{
                return <Alert severity='error'>Have not found this stduent!</Alert>
            }
        }
    }
    
  

    return (

        <div style={{ backgroundImage: `url(${backimg})` }} className="mainPage">
            <div className="actName">
            <Avatar sx={{ bgcolor: green[500] }} onClick={ ()=>{
                return(
                    <Link to='/signup'/>
                )
            }
            } >{head}</Avatar>
            <br/>
            <Button color='warning' variant='contained' size='small' onClick={() => {
                sessionStorage.clear();
                window.location.reload();
                
                
            }}>Log Out
            </Button>
            </div>
            <h1>Add new student</h1>
            <div className="add">

                <TextField label='Name' variant='standard' onChange={e => setName(e.target.value)}></TextField>
                <TextField label='Age' variant='standard' onChange={e => setAge(e.target.value)}></TextField>
                <TextField label='Level' variant='standard' onChange={e => setLevel(e.target.value)}></TextField>
                <TextField label='Gpa' variant='standard' onChange={e => setGpa(e.target.value)}></TextField>

            </div >
            <br />
            <div>
                <Button variant='contained' size='small' onClick={() => {
                    axios.post('http://localhost:8080/main/user/add', {
                        name: name,
                        age: age,
                        level: level,
                        gpa: gpa
                    }).then(function (response) {
                        // handle success
                        console.log(response);


                        setAdd(response.data);


                    })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }}>Add new student</Button>
            </div>
            {addNew(add)}


            <h1>Delete student</h1>
            <div className="delete">
                <TextField label='Id' variant='standard' onChange={e => setId(e.target.value)}></TextField>
            </div>
            <br />
            <div>
                <Button variant='contained' size='small' onClick={() => {
                    var val = "http://localhost:8080/main/user/delid/" + id
                    axios.delete(val, {

                    }).then(function (response) {
                        // handle success
                        console.log(response);
                        setDele(response.data);
                    })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }}>Delete</Button>
            </div>

            {deleById(dele)}


            <h1>Update student information</h1>
            <div className="update">
                <TextField label='Id' variant='standard' onChange={e => setId(e.target.value)}></TextField>
                <TextField label='Name' variant='standard' onChange={e => setName(e.target.value)}></TextField>
                <TextField label='Age' variant='standard' onChange={e => setAge(e.target.value)}></TextField>
                <TextField label='Level' variant='standard' onChange={e => setLevel(e.target.value)}></TextField>
                <TextField label='Gpa' variant='standard' onChange={e => setGpa(e.target.value)}></TextField>
            </div>
            <br />
            <div>
                <Button variant='contained' size='small' onClick={() => {

                    axios.put("http://localhost:8080/main/user/put", {
                        id: id,
                        name: name,
                        age: age,
                        level: level,
                        gpa: gpa

                    }).then(function (response) {
                        // handle success
                        console.log(response);
                        setUpdate(response.data);
                    })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }}>Update</Button>

            </div>

            {updataById(update)}


            <h1>Serach student information</h1>
            <div className="search">
                <TextField label='Id' variant='standard' onChange={e => setId(e.target.value)}></TextField>
            </div>
            <br />
            <div>
                <Button variant='contained' size='small' onClick={() => {
                    var val = "http://localhost:8080/main/user/getid/" + id
                    axios.get(val, {
                    }).then((response) => {
                        // handle success
                        setGetOne(response.data)
                        console.log(response.data);
                        console.log("getone:" + getone)

                    })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }}>Serach</Button>
            </div>
            <br />
            <div>
               
                {getById(getone)}

            </div>

            <h1>All student information</h1>
            <div className="all">
                please click to refresh <Button variant='contained' size='small' onClick={() => {

                    axios.get("http://localhost:8080/main/user/all", {

                    }).then((response) => {
                        // handle success
                        //console.log(response)

                        setPost(response.data)

                        console.log(post)
                    })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }}>Serach All</Button>
            </div>
            <br />
            <div>
                {display(post)}
            </div>
        </div>
    )
}
export default Main;