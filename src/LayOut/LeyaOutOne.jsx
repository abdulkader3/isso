import React from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'
import NavbarPage from '../Components/NavbarPage'

const LeyaOutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}

export default LeyaOutOne
