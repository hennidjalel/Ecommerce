import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCall';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });
    }

    return (
        <div style={{
                height: "100vh",
                display: "flex", 
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center"

            }}>
            <input style={{
                padding: 10, marginBottom: 15
            }} 
            type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input style={{
                padding: 10, marginBottom: 15
            }} 
            type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick} style={{padding: 5, width: 100}}>Login</button>
        </div>
    )
}

export default Login