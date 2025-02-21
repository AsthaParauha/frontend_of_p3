import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="form_contanior">
      <h3> Please login to continue...</h3>
      <form action="login.php" method="POST" className="myform">
        <div className="form">
          {/* <!-- name --> */}
          <div className="formElement" id="element1">
            <label htmlFor="Name">Enter Your Name : </label>
            <input type="text" name="name" className="Name"></input>
          </div>

          {/* <!-- passord --> */}
          <div className="formElement" id="element2">
            <label htmlFor="passord">Your Password : </label>
            <input type="text" name="passord" className="passord"></input>
          </div>
          <div className="formElement">
            <button className="button" type="submit">log in</button>
          </div>

        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
