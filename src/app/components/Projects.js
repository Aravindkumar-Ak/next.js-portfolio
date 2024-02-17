import React from 'react'
import Image from 'next/image'
import project1 from "../../../public/Assets/Netflix.jpg"
import project2 from "../../../public/Assets/Food.png"
import project3 from "../../../public/Assets/Ecommerce.png"
import project4 from "../../../public/Assets/Imdb.png"
const Projects = () => {
  return (
    <div className=' pt-12 text-center dark:bg-black pb-16'>
        <h1 className='font-semibold text-3xl  text-teal-400 border-b-2 border-blue-400 inline-block'>PROJECTS</h1>
    <div className="flex flex-col gap-10 py-10 px-12 lg:flex-row lg:flex-wrap text-center  ">
            <div className="w-[775px]">
              <Image
                className="rounded-lg object-cover"
                
                layout="responsive"
                src={project1}
                alt="pic"
              />
              <h3 className='text-lg mt-4 font-semibold  text-blue-800 dark:text-yellow-400'>Netflix-clone</h3>
              </div>
              <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project2}
                alt="pic"
              />
                <h3 className='text-lg mt-4 font-semibold text-blue-800  dark:text-yellow-400'>Movie-Review</h3>
              </div>
              <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project3}
                alt="pic"
              />
              
                <h3 className='text-lg mt-4 font-semibold text-blue-800  dark:text-yellow-400'>Ecommerce</h3>
              </div>
              <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project4}
                alt="pic"
              />
                <h3 className='text-lg mt-4 font-semibold text-blue-800  dark:text-yellow-400'>Food Delivery</h3>
              </div>
              </div>
              </div>
  )
}

export default Projects