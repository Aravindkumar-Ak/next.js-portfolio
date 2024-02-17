import React from 'react'
import web1 from "../../../public/Assets/java.jpg"
import web2 from "../../../public/Assets/spring-boot-logo.png"
import web3 from "../../../public/Assets/sql.webp"
import web4 from "../../../public/Assets/mongo.png"
import web5 from "../../../public/Assets/Html.png"
import web6 from "../../../public/Assets/css.png"
import web7 from "../../../public/Assets/tailwind.jpg"
import web8 from "../../../public/Assets/React.png"
import Image from 'next/image'
const TechStack = () => {
  return (
    
    <div className='text-center  p-20 text-yellow-400 dark:text-white dark:bg-black'  >
     <h1 className='font-semibold text-3xl text-teal-400  border-b-2 border-blue-400 inline-block'>TECH STACK</h1>
<div className='flex md:flex-row flex-col justify-evenly gap-8 items-center mt-20'>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Java</h1>
        <Image src={web1} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>SpringBoot</h1>
        <Image src={web2} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer '>
        <h1>Sql</h1>
        <Image src={web3} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Mysql</h1>
        <Image src={web4} alt="pic"/>
    </div>
</div>
<div className='flex md:flex-row flex-col justify-evenly gap-20 items-center mt-20'>
<div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Html</h1>
        <Image src={web5} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Css</h1>
        <Image src={web6} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Javascript</h1>
        <Image src={web7} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>React</h1>
        <Image src={web8} alt="pic"/>
    </div>
</div>
        </div>
      
   
  )
}

export default TechStack