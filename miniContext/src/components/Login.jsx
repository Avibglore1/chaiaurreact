import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const{setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <>
        <h2>Login</h2>
        <input 
        type="text" 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Username'
        />
        <br />
        <input 
        type="password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </> 
  )
}

export default Login