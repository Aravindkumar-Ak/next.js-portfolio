import React from 'react'
import web1 from "../../../public/Assets/java.jpg"
import web2 from "../../../public/Assets/spring-boot-logo.png"
import web3 from "../../../public/Assets/Mysql.png"
import web4 from "../../../public/Assets/Mongodb.png"
import web5 from "../../../public/Assets/Html.png"
import web6 from "../../../public/Assets/css.png"
import web7 from "../../../public/Assets/javaScript.png"
import web8 from "../../../public/Assets/React.png"
import web9 from "../../../public/Assets/Next.png"
import Image from 'next/image'
const TechStack = () => {
  return (
    
    <div className='text-center  p-20  bg-violet-400 text-yellow-400  dark:bg-black dark:text-white'  >
     <h1 className='font-semibold text-3xl text-blue-500'>TechStacks</h1>
<div className='flex md:flex-row flex-col justify-evenly gap-8 items-center mt-20'>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>Java</h1>
        <Image src={web1} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
        <h1>SpringBoot</h1>
        <Image src={web2} alt="pic"/>
    </div>
    <div className='w-[150px] hover:-translate-y-4 hover:duration-300 cursor-pointer'>
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