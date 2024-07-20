import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    let navigate = useNavigate();
    useEffect (() => {
        localStorage.removeItem('jwt');
    })
    
    const baseUrl = axios.create({
        baseURL: 'http://127.0.0.1:8000/app/',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    let register = async (e) => {
        try {
            let response = await baseUrl.post('register/', {
                username: e.target.username.value,
                password: e.target.password.value,
            });
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(e);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control"
                        style={{ maxWidth: '300px', marginBottom: '15px' }}
                    />
                </div>
                <div className="form-group">

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        style={{ maxWidth: '300px', marginBottom: '15px' }}
                    />
                </div>
                <button type='submit' className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;