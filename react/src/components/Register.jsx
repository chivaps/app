import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    let navigate = useNavigate();

    const baseUrl = axios.create({
        baseURL: 'http://127.0.0.1:8000/app/',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    let register = async (e) => {
        try{
            let response = await baseUrl.post('register/', {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            if (response.status === 201){

                navigate('/login');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(e);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
