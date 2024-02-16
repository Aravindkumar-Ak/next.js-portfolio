import React from 'react'
import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from "react-icons/ai";

const Info = () => {
  return (
    <>
    <div className='text-center p-10 md:px-40'>
        <h1 className='font-extrabold md:text-5xl text-xl mt-12 mb-4 text-black  dark:text-white'>AravindKumar</h1>
        <h2 className='font-semibold text-lg md:text-3xl text-teal-500 py-2'>Fullstack Developer</h2>
        <h3 className='from-neutral-400 font-sans text-md md:mx-auto md:text-center max-w-lg py-4'>As a Fullstack React and Java Developer combines frontend expertise with backend proficiency to develop dynamic, scalable, and efficient web applications, leveraging the strengths of both React.js and Java technologies.</h3>
    </div>
    <div className='flex text-4xl justify-center items-center cursor-pointer gap-16 text-gray-50'>
      <a href='https://github.com/Aravindkumar-Ak'>
<AiFillGithub className='hover:-translate-y-2 hover:duration-300 transition-all'/></a>
<AiFillLinkedin className='hover:-translate-y-2 hover:duration-300 transition-all'/>
<AiFillTwitterCircle className='hover:-translate-y-2 hover:duration-300 transition-all'/>
    </div>
    </>
  )
}

export default Info