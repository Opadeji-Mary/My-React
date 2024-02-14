import React, { useState } from 'react'

const Register = () => {
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const register = ()=>{
    console.log(Firstname, Lastname, Email, Password)
  }
  return (
    <>
   <div className="col-6 mx-auto">
    <div className="row">
    <input type="text" placeholder='Firstname' onChange={(e)=>setFirstname(e.target.value)} />
    <input type="text" placeholder='Lastname' onChange={(e)=>setLastname(e.target.value)} />
    <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
    <button className="btn btn-success" onClick={register}>Sign Up</button>
    </div>
   </div>
    </>
  )
}

export default Register