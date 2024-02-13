import React from 'react'
import { Outlet } from 'react-router-dom'

const Vanlayout = () => {
  return (
    <>
    <div>Vanlayout</div>
    <nav>
      <Link to="/van">dashboard</Link>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Vanlayout