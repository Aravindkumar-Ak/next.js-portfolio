'use client'
import Info from "./components/Info";
import Model from "./components/Model";
import { Navbar } from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import Footer from "./components/Footer";
import {easeIn, motion as m} from 'framer-motion'



export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
 
 return (
 <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75 ,ease:easeIn}} >
    <main className={darkMode?'dark':''}>
     
    <section className="min-h-screen bg-gradient-to-b from-red-400 to-orange-200 text-black dark:bg-black dark:text-white">
<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

<Info/>

<TechStack/>
<Projects/>
<ContactForm/>
<Footer/>
    </section>
    
     </main>
     </m.div>
  );
}
