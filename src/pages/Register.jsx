import React from 'react'
import "../css/register.css"

const Register = () => {
  const registerSubmit = ()=>{
    massage("You have been Registered.")
  }
  return (
    <div>
      <div className="form_contanior">
      <h3> Please Register to continue...</h3>
      <form action="backend.php" method="POST" className="myform">
        <div className="form">
            {/* name */}
            <div className="formElement" id="element1">
                <label htmlFor="Name">Enter Your Name : </label>
                <input type="text" name="name" className="Name"></input>
            </div>
            {/* email */}
            <div className="formElement" id="element2">
                <label htmlFor="Email">Enter Your Email : </label>
                <input type="email" name="email" id="Email"></input>
            </div>
            {/* passord */}
            <div className="formElement" id="element1">
                <label htmlFor="passord">Password : </label>
                <input type="text" name="password" className="passord"></input>
            </div>
           <div className="formElement">
               <button className="button" type="submit">Sign in</button>
           </div>
           
        </div>
    </form>
    </div>

    </div>
  )
}

export default Register
