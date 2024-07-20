import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Routing = () => {
    const jwt = localStorage.getItem('jwt');
    const isAuthenticated = jwt !== null; 
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default Routing;