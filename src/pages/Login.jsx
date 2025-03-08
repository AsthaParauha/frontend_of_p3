import { useState } from "react";
import axios from "axios";

const Login = ({setPage}) => {
  const [password, setPassword]=useState()
  const [name, setName]=useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const loginHandler= async(name,password)=>{
    try {
      const data={name,password};
      console.log(data)
      const res = await axios.post("https://backend-of-p3.onrender.com/login",data);
      localStorage.setItem("username", res.data.name);
      setIsLoggedIn(true);
      setPage("home")
      console.log("you are logged in");
    } catch (error) {
      alert("Invalid Credentials");
      console.log(error)
    }
  

  }
  
  return (
    <div>
      <div className="form_contanior">
      <h3> Please login to continue...</h3>
      <form onSubmit={()=>loginHandler(name,password)} method="POST" className="myform">
        <div className="form">
          {/* <!-- name --> */}
          <div className="formElement" id="element1">
            <label htmlFor="Name">Enter Your Name : </label>
            <input type="text" name="name" className="Name" onChange={(event)=>{setName(event.target.value)}}></input>
          </div>

          {/* <!-- passord --> */}
          <div className="formElement" id="element2">
            <label htmlFor="passord">Your Password : </label>
            <input type="text" name="passord" className="passord" onChange={(event)=>{setPassword(event.target.value)}}></input>
          </div>
          <div className="formElement">
            <button className="button" type="submit" >log in</button>
          </div>

        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
