'use client'
import Info from "./components/Info";
import Model from "./components/Model";
import { Navbar } from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import Footer from "./components/Footer";



export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
 
 return (
 
    <main className={darkMode?'dark':''}>
     
    <section className="min-h-screen bg-blue-300 text-black dark:bg-black dark:text-white">
<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

<Info/>
<Model/>
<TechStack/>
<Projects/>
<ContactForm/>
<Footer/>
    </section>
    
     </main>
    
  );
}
