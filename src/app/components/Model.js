import React from 'react'
import Image from 'next/image'
import model from "../../../public/Assets/aravind.png"
const Model = () => {
  return (
    <div className='relative w-80 h-80 border-0 border-black rounded-full mx-auto mt-20 overflow-hidden bg-gradient-to-b from-yellow-400'>
       
       <Image src={model} layout="fill" objectFit='cover'/>
       
       </div>
  )
}

export default Model 