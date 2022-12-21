import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Dashboard/Sidebar'

const Layout = () => {
  return (
    <div className='flex w-full'>
      <Sidebar/>
      <div className='pt-5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout