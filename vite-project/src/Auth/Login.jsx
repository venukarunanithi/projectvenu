 import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://project11-1-x7sk.onrender.com/user/login', { username, password })
            setMessage(res.data.message)
        } catch (err) {
            setMessage('Login failed')
            console.log(err);
           
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={username}
                    placeholder='enter the username'
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password"
                    value={password}
                    placeholder='enter the password'
                    onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <p>{message}</p>
            </form>
        </div>
    )
}


export default Login
