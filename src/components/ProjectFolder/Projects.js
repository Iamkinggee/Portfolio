import React from 'react'
import ProjectCard from './ProjectCard'
import AmastoreVideo2 from '../../assets/AmastoreVideo2.mp4'
import CoinDuckoVideo from '../../assets/CoinDuckoVideo.mp4'
// import PortfolioVideo from '../../assets/PortfolioVideo.mp4'
import Porfolioproject from './Porfolioproject'


const Projects = () => {
  return (
  
        <div className='w-full font-[LexendZetta]' id='works'>
    <div className=' max-w-[1000px]  font-mono text-black m-auto  '>
 
    <h1 className='font-bold  text-neutral-500 
    
    text-[30px] sm:text-center md:text-[50px] font-[LexendZetta]  text-center md:text-center 
    pt-20  'id='text-title'>Works</h1>
    <p className='pb-10  text-center font-light md:text-[15px] text-[10px] text-white font-[LexendZetta]'>These are some of my latest Projects.</p>

<div >


 {/* <ProjectCard title='Portfolio Website' techtools='Javascript, Tailwind CSS, React.js' discription='This is my Portfolio Website ' viewcodebutton='View code' viewcodelink={'https://github.com/Iamkinggee/Coinducko.git'}  image={<video  autoPlay loop muted loading='lazy' src={PortfolioVideo} alt="/" className='object-contain h-[200px]  m-auto w-[300px] md:h-[350px] md:w-[500px] ' />}/> */}


<div >
<Porfolioproject />
</div>
    

    <ProjectCard title='CoinDucko' techtools='Coingecko API, Javascript, Tailwind CSS, React.js' discription='CoinDucko is a digital platform - built with the CoinGecko API; provides real-time data on various cryptocurrencies, including their current price, market cap and trading volume. Users can easily search for specific coins and view detailed information about them. The sleek and intuitive design makes it easy for users to stay updated on the latest crypto trends and make informed decisions. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<video  autoPlay loop muted loading='lazy' src={CoinDuckoVideo} alt="/" className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px] bg-transparent' />} visitsitelink={'https://coin-ducko.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/Coinducko.git'} />

    <ProjectCard title='Amastore' techtools='Javascript, Tailwind CSS, React.js' discription='Amastore is an e-commerce store for shopping for different products.' visitsitebutton='Visit Site' visitsitelink={'https://amastore-mauve.vercel.app/'} viewcodebutton='View Code'  viewcodelink={'https://github.com/Iamkinggee/Amastore.git'} rel="noreferrer"  image={<video  autoPlay loop muted loading='lazy' src={AmastoreVideo2} alt="/" className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px] bg-transparent p-0' />}/> 

    </div>
    </div>
    </div>
  )
}

export default Projects