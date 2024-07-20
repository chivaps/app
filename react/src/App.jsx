import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from "./components/Login";
import Todo from "./components/Todo";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route element={<Routing />}>
            <Route path="/" element={<Todo />} />
          </Route>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
