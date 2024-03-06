import React from 'react'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import PortfolioVideo from '../../assets/PortfolioVideo.mp4'


const Porfolioproject = () => {
  return (
    <div className='w-full' >
          <div className='grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto spaxe-x-10 '>

<div className='w-full m-auto  pt-5  md:pr-10  '>

<Slide left>

    <video autoPlay loop muted loading='lazy' alt="/"  src={PortfolioVideo}/>

</Slide>

</div>
<div className='   first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded '>

<Slide right>
   <h1 className=' text-xl md:text-4xl font-[LexendZetta] font-semibold  text-center md:text-start justify-center items-center   text-white' id='text-black' >Porfolio Website</h1>
   <div className='text-center md:text-start'>
  
   <p className=' font-medium pb-5 py-4 text-white font-[poppins] text-[15px] text-start pl-2 md:pl-0  '>This is my Portfolio Website </p>
   <p className='text-[14px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-300 mt-3'>Technologies Used:</p>
   <p className='font-[poppins]  font-semibold  text-blue-500' id='text-blue'>Javascript, Tailwind CSS, React.js</p>
   </div>


    <div className='mt-4 text-center md:text-start justify-center items-center'>

    
     <Link to={'https://github.com/Iamkinggee/Coinducko.git'} target='_blank' rel='noopener noreferrer' >
     <button className='rounded hover:scale-105 duration-300 shadow-lg  p-3 font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>View Code</button>            
     </Link>
     
  
</div>

   
   </Slide>
</div>


</div>
{/* line */}
<div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
<hr className="bg-blue-700"/>
</div>



    </div>
  )
}

export default Porfolioproject;