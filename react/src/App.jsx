import React from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Register";

function App() {
  const tokens = localStorage.getItem('jwt');
  const isAuthenticated = tokens !== null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={isAuthenticated ? <MainPage/> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
