import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const signUp = () =>{
    alert("sign up successful")
    navigate("/contact")
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signUp} className="btn btn-info">Sign Up</button>
      {/* <center>
      <div class="🤚">
	   <div class="👉"></div>
	   <div class="👉"></div>
	   <div class="👉"></div>
	   <div class="👉"></div>
	   <div class="🌴"></div>		
	   <div class="👍"></div>
     </div>
      </center> */}


      
    </div>
  )
}

export default Home