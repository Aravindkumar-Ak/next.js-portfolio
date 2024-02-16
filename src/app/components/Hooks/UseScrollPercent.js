import React, { useState,useEffect } from 'react'

const UseScrollPercent = () => {

const[scrollPercent,setScrollPercent]=useState(0);

const handleScroll=()=>{
    const howMuchYouScroll=document.body.scrollTop||
        document.documentElement.scrollTop
    
    const scrollHeight= document.documentElement.scrollHeight-
        document.documentElement.clientHeight
        const percentageOfScroll=((howMuchYouScroll/scrollHeight)*100)
        setScrollPercent(percentageOfScroll);
}

useEffect(() => {
window.addEventListener("scroll",handleScroll)

   return ()=>{
    window.removeEventListener("scroll",()=>{});
   }
}, [])

return scrollPercent;
}

export default UseScrollPercent;