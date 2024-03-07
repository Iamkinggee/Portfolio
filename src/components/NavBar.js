import React from 'react'
import {BsTelephone,BsGear} from 'react-icons/bs'
import {GoFileDirectory,GoHome} from 'react-icons/go'
import{AiOutlineUser} from 'react-icons/ai'
import {Link as ScrollLink} from 'react-scroll'




const NavBar = () => {
  return (

<div className='fixed bottom-0 w-full overflow-visible   text-[2px] p-3   -z-100 font-semibold'>
<div className='rounded max-w-[1000px]  flex justify-between items-center m-auto   border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-90 bg-slate-800'> 
    <div className="grid h-full grid-cols-5   p-2 px-5 m-auto ">



    <ScrollLink to="home" smooth={true} duration={500}>  
        <button  type="button" className="inline-flex flex-col items-center justify-center hover:scale-105 duration-300 shadow-lg  dark:hover:bg-gray-700 group ">
     
         <GoHome className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white   text-[10px]">Home</span>
        </button>
        </ScrollLink>








  
    <ScrollLink to="about" smooth={true} duration={500} offset={-65}>  
        <button type="button" className="inline-flex flex-col items-center justify-center m-auto dark:hover:bg-gray-700 group hover:scale-105 duration-300 shadow-lg ">
        
         <AiOutlineUser className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white  dark:group-hover:text-white  text-[10px]">About</span>
        </button>
        </ScrollLink>




<ScrollLink to="skills" smooth={true} duration={500} offset={40}>  
        <button type="button" className="inline-flex flex-col items-center justify-center m-auto dark:hover:bg-gray-700 group hover:scale-105 duration-300 shadow-lg ">
        
         <BsGear className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white  dark:group-hover:text-white  text-[10px]">Skills</span>
        </button>
        </ScrollLink>




        <ScrollLink to="works" smooth={true} duration={500}> 
        <button type="button" className="inline-flex flex-col items-center justify-center  dark:hover:bg-gray-700 group hover:scale-105 duration-300 shadow-lg ">

            <GoFileDirectory className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>




            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white ">Works</span>
        </button>
        </ScrollLink>


        



        <ScrollLink to="contact" smooth={true} duration={500}>
        <button type="button" className="inline-flex flex-col items-center justify-center  dark:hover:bg-gray-700 group hover:scale-105 duration-300 shadow-lg">      
        <BsTelephone className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white ">Contact</span>
        </button>
        </ScrollLink>
    </div>
</div>
</div>


  )
}

export default NavBar
