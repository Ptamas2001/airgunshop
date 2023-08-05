import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const login = () =>{
    const data = {username: username,password:password}
    axios.post("http://localhost/users/login", data).then ((response)=>{
    console.log(response.data)
    setUsername(data.username);
    setPassword(data.password)
    })
    }

  return (
    <div>
      <input type="text" onChange={(event)=> setUsername(event.target.value)}></input>
      <input type="password" onChange={(event)=> setPassword(event.target.value)}></input>
      <button onClick={login}></button>
    </div>
  )
}

export default Login
