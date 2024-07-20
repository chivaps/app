import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
   
    <div className="btn-group w-100" role="group" aria-label="Basic example">
        <a href="/login" className="btn btn-outline-primary flex-fill">Login</a>
        <a href="/register" className="btn btn-outline-primary flex-fill">Register</a>
        <a href="/" className="btn btn-outline-primary flex-fill">Home</a>
    </div>
  )
}

export default Navbar
