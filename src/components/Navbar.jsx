import React from 'react'
import "../css/navbar.css"

const Navbar = ({setPage}) => {

  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    {/* <img src="../../media/img/logo.png" alt="Satna ke Dhaba" /> */}
    <a className="navbar-brand" href="#">Satna ke Dhaba</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>{setPage("home")}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#products">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            more
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" id="login" onClick={()=>{setPage("login")}}>Login</a></li>
            <li><a className="dropdown-item" onClick={()=>{setPage("register")}}>Register</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
