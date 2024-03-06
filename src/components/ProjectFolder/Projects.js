import React from 'react'
import ProjectCard from './ProjectCard'
import AmastoreVideo from '../../assets/AmastoreVideo.mp4'
import CoinDuckoVideo from '../../assets/CoinDuckoVideo.mp4'
import PortfolioVideo from '../../assets/PortfolioVideo.mp4'
import Port from '../../assets/Port.mp4'
import DPP from '../../assets/DPP.mp4'


const Projects = () => {
  return (
  
        <div className='w-full font-[LexendZetta]' id='works'>
    <div className=' max-w-[1000px]  font-mono text-black m-auto  '>
 
    <h1 className='font-bold  text-neutral-500 
    
    text-[30px] sm:text-center md:text-[50px] font-[LexendZetta]  text-center md:text-center 
    pt-20  'id='text-title'>Works</h1>
    <p className='pb-10  text-center font-light md:text-[15px] text-[10px] text-white font-[LexendZetta]'>These are some of my latest Projects.</p>





<div >

  <></>
 <ProjectCard title='Portfolio Website' techtools='Javascript, Tailwind CSS, React.js' discription='This is my Portfolio Website ' viewcodebutton='View code' viewcode='https://iamkinggee.github.io/TODO-APP/' rel="noreferrer" target="_blank"  image={<video  autoPlay loop muted loading='lazy' src={PortfolioVideo} alt="/" className='object-contain h-[200px]  m-auto w-[300px] md:h-[350px] md:w-[500px] ' />}/>




{/* done with these */}

    <ProjectCard title='CoinDucko' techtools='Coingecko API, Javascript, Tailwind CSS, React.js' discription='CoinDucko is a digital platform - built with the CoinGecko API; provides real-time data on various cryptocurrencies, including their current price, market cap and trading volume. Users can easily search for specific coins and view detailed information about them. The sleek and intuitive design makes it easy for users to stay updated on the latest crypto trends and make informed decisions. ' discover='Visit Site' viewcodebutton='View Codes'  image={<video  autoPlay loop muted loading='lazy' src={CoinDuckoVideo} alt="/" className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px] bg-transparent' />} url={'https://coin-ducko.vercel.app/'} viewcode={'https://github.com/Iamkinggee/Coinducko.git'} />

    <ProjectCard title='Amastore' techtools='Javascript, Tailwind CSS, React.js' discription='Amastore is an e-commerce store for shopping for different products.' discover='Visit Site' url={'https://amastore-mauve.vercel.app/'} viewcodebutton='View Codes'  viewcode={'https://github.com/Iamkinggee/Amastore.git'} rel="noreferrer"  image={<video  autoPlay loop muted loading='lazy' src={AmastoreVideo} alt="/" className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px] bg-transparent p-0' />}/> 

    </div>
    </div>
    </div>
  )
}

export default Projects