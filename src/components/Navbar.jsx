import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-info border-bottom border-body" data-bs-theme="dark">
     <div class="container-fluid">
    <Link className='navbar-brand' to="">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className='nav-link active' to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link ' to="/price">Price</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link ' to="/fetch">Fetch</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/service">Service</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar