import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from "react-icons/fi";


const NavbarPage = () => {
  return (
    <>
      <nav className=' ml-[112px] mt-[41px] items-center flex w-[1138px] h-[60px]' >
        <div className="logo w-[90px] h-[60px] ">
          <img src="Photos/logo.png" alt="" />
        </div>
        <h2 className='text-[15px] font-semibold font-poppins ml-[65px] ' >Our Services</h2>
        <ul className='flex ml-[135px] gap-[33px] text-[15px] font-semibold font-poppins ' >
          <li><Link to='#'>About </Link></li>
          <li><Link to='#'>Blog&News </Link></li>
          <li><Link to='#'>Contact  </Link></li>
        </ul>
        <div className=" ml-[200px] text-[15px] font-semibold flex items-center font-poppins">
        <ul>
        <li><Link to='#'>Account  </Link></li>
        </ul>
        <div className="  w-[1px] h-[19px] ml-[31px] mr-[30px] rounded-xl bg-slate-600 "></div>
        <div className="flex items-center">
          <FiPhone className='text-[#B00000] ' />
          <p className='ml-[6px]' >+2349067322844</p>
        </div>


        </div>


      </nav>
      
    </>
  )
}

export default NavbarPage
