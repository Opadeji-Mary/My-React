import React from 'react'
import './Signup.css'
import axios from 'axios'
import { useState } from 'react'

const Signup = () => {
    const[FormData, setFormData] = ({
        
    })
    const handleChange = (e) =>{
        setFormData({...FormData, [e.target.name]: e.target.value});

        const [Firstname, setFirstname] = useState("");
        const [Lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    };
    const handleSubmit = (e)=>{
        e.preventDafault();
        console.log(Lastname, Firstname,email,password)
    }
  return (
    <div>
        <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
         <span className="title">Sign up</span>
         <span className="subtitle">Create a free account with your email.</span>
         <div className="form-container">
         <input 
              type="text"
              name="Firstname"
              id="last-name"
              onChange={handleChange}
              autoComplete=''
              placeholder="Firstname">
            </input>
            <input 
              type="text"
              name="Lastname"
              id="last-name"
              autoComplete=''
              placeholder="Lastname">
            </input>
			<input 
              type="email"
              name="input"
              id="email"
              autoComplete=''
              placeholder="Email">
            </input>
			<input 
            type="password" 
            name="input" 
            id="password"
            autoComplete=''
            placeholder="Password">
            </input>
         </div>
         <button>Sign up</button>
        </form>
         <div className="form-section">
         <p>Have an account? <a href="">Log in</a> </p>
        </div>
        </div>
    </div>
  )
}

export default Signup