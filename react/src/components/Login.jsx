import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    let navigate = useNavigate();

    const baseUrl = axios.create({
        baseURL: 'http://127.0.0.1:8000/app/',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    let login = async (e) => {
        try {
            let response = await baseUrl.post('token/', {
                username: e.target.username.value,
                password: e.target.password.value,
            });
            let data = response.data;
            if (response.status === 200) {
                localStorage.setItem('jwt', JSON.stringify(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(e);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
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
                <button type='submit' className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;