import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>Contact
      <div class="card">
  <p class="heading">Contact Us</p>
  
 <div class="input-div">
    <input type="text" class="input" placeholder="Email"></input>
    </div>
    <div class="input-div">
    <input class="input" type="text" placeholder="Phone"></input>
    </div>
    <div class="input-div">
    <input class="input" type="text" placeholder="Message"></input>
    </div>
    <div class="button-div">
      <button class="submit">Submit</button>
    </div>
</div>
    </div>
  )
}

export default Contact