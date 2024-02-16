import React from 'react'
import {FaMoon} from "react-icons/fa"
import UseScrollPercent from './Hooks/UseScrollPercent';
export const Navbar = ({darkMode,setDarkMode}) => {
  const scrollWidth=UseScrollPercent();
  console.log(scrollWidth);
  return (
    <div className={` bg-red-700 h-2 fixed z-1 w-full`} >
<div style={{width:`${scrollWidth}%`}}  className={`h-full ${scrollWidth<50?'bg-blue-500':'bg-green-400'}`}>
</div>
   <nav className='flex justify-between items-center px-4 py-6 mb-10'>
    <h1 className='font-[Poppins] text-xl font-bold'>Aravindkumar</h1>
    <ul className='flex items-center'>
        <li className='cursor-pointer' onClick={()=>{setDarkMode(!darkMode)}}><FaMoon/></li>
        <li className='ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 rounded-md font-sans cursor-pointer'>
          <a href='https://drive.google.com/file/d/1rzG21bFOFisbvtz2-nY71SJy0sdR-_dO/view?usp=drivesdk '>Resume</a></li>
    </ul>
   </nav>
   </div>
   
  )
}
