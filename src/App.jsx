import React, { useState } from 'react'
import "./css/app.css"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const App = () => {
  const [page, setPage] = useState("home")

  return (
    < div className="page">
      <Navbar setPage={setPage} />
      
      {page==="home"&&
      <Home/>
      }
      {page==="login"&&
      <Login/>
      }
      {page==="register"&&
      <Register/>
      }
      <Footer />
    </div>
  )
}

export default App
