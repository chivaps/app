import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    let navigate = useNavigate();
    const baseUrl = axios.create({
        baseURL: 'http://127.0.0.1:8000/app/',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    let login = async (e) => {
        try{
            let response = await baseUrl.post('token/', {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            let data = response.data;
            if (response.status === 200){
                localStorage.setItem('jwt', JSON.stringify(data));
                navigate('/');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(e);
    };
    
    return (
        <div>
            <h2>Login</h2>
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
                <button type='submit' >Login</button>

            </form>

        </div>
    );
};

export default AuthPage;