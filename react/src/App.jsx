import React from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Register";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainPage/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
