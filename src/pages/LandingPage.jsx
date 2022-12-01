import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1>Ini landing page</h1>
    <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default LandingPage