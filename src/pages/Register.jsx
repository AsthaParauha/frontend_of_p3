import React,{useState} from 'react'
import axios from "axios" //to send a http request to the server
import { useNavigate } from "react-router-dom"; // to redirect automatically

import "../css/register.css"

const Register = () => {
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()
  const [name, setName]=useState()
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(name,email,password);

  // const navigate = useNavigate()

  const registerSubmit = async(name,email,password)=>{
    try{
      const data = { name, email, password };
      console.log('Sending data:', data);
      await axios.post("https://backend-of-p3.onrender.com/register", data);

      localStorage.setItem("username", name)
      setIsLoggedIn(true)
      // navigate("/home")
      console.log("you have been registered.").then(alert("You have been registered Successfully."))
    }
    catch(error){
      alert("some error occured")
      console.log(error)
    }

  }
  return (
    <div>
      <div className="form_contanior">
      <h3> Please Register to continue...</h3>
      <form onSubmit={()=>registerSubmit(name,email,password)} method="POST" className="myform">
        <div className="form">
            {/* name */}
            <div className="formElement" id="element1">
                <label htmlFor="Name">Enter Your Name : </label>
                <input type="text" name="name" className="Name" onChange={(event)=>{setName(event.target.value)}}></input>
            </div>
            {/* email */}
            <div className="formElement" id="element2">
                <label htmlFor="Email">Enter Your Email : </label>
                <input type="email" name="email" id="Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            {/* passord */}
            <div className="formElement" id="element1">
                <label htmlFor="passord">Password : </label>
                <input type="text" name="password" className="passord" onChange={(event)=>{setPassword(event.target.value)}}></input>
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
