import React, { useRef, useState } from 'react'



const ContactForm = () => {

const[user,setUser]=useState([]);

  const username=useRef(null);
const text=useRef(null);

const handleSubmit=(e)=>{
e.preventDefault();

console.log(username.current.value,text.current.value);
setUser([...user,username.current.value,text.current.value]);
username.current.value="";
text.current.value="";
}

  return (
    <div className='w-full p-12  bg-gradient-to-b from-[#a8dbca] to-[#FFD1DB]  dark:bg-black'>
    <div className='flex flex-col justify-center items-center '>
        <h2 className='text-center text-3xl font-sans mb-8'>Contact Form</h2>
        <form onSubmit={(e)=> {handleSubmit(e)}}>
        <div className="mb-4">
      <label className="block text-gray-700 text-lg font-bold mb-2" for="username">
      Name
      </label>
      <input ref={username} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-lg font-bold mb-2" for="Textarea">
        Textarea
      </label>
     
      <textarea cols={12} rows={8} ref={text} id="Textarea" className="resize-none shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" ></textarea>
    </div>
    <button type='submit' className='bg-teal-300 px-8 py-1 rounded-lg text-center font-md font-semibold'>Click to contact</button>
        </form>
    </div>
    </div>
  )
}

export default ContactForm