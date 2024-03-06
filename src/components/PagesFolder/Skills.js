import React from 'react'
import G2 from '../../assets/G2.gif'
import { Slide } from "react-awesome-reveal";




const Skills = () => {
  return (
// text-black
    <div   className='w-full text-black font-mono ' id='skills' >
        <div className='grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto' >

         <div className='m-auto'>
            <Slide direction='left'>
              <img src={G2}  alt="pc-two gif" className='w-[300px] md:w-full md:pt-20 pt-0 ' />
              </Slide> 
         </div>
         <div className=' ' >
            <Slide direction='right'>
         <h1 className='  text-neutral-500 
         
         text-[30px] sm:text-center md:text-[50px]  font-bold text-center md:text-start font-[LexendZetta] 
         pt-20
         ' id='text-title'>TechStack</h1>
     
            <p className='pb-5 py-2 text-start  text-white font-[LexendZetta] md:text-[15px] text-[10px]'>I'm Proficient in but, <br /> not limited to these   Technologies.</p>
            </Slide>
        <div className='flex  pt-10 gap-10 pb-5 font-[LexendZetta]  font-light  text-blue-500 text-[15px] ' id='text-blue' >
            <div >
            <Slide direction='right'>
                <li>HTML</li>    
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Tailwind CSS</li>
                <li>UI/UX</li> 
                <li>Wordpress</li>
                <li>BootStrap</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li> 
                </Slide>       
            </div>
        </div>
                
         </div>
        </div>
    </div>
    
  )
}

export default Skills










// import React, {useEffect, useRef} from "react";
// import {TimelineLite} from "gsap";

// import "./skills.css";

// const skills = [
//   `React`,
//   `Redux`,
//   `TypeScript`,
//   `JS(ES5+)`,
//   "Gatsby",
//   `HTML`,
//   `CSS`,
//   "Sass",
//   "pug",
//   `Jest`,
//   `Enzyme`,
//   "Unit tests | E2E | Snapshot",
//   "Accessibility",
//   "Performance optimization",
// ];

// const courses = [
//   {
//     name: `Javascript, Level&nbsp;3 (React.js)`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/133/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `Javascript, Level&nbsp;2`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/131/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `Javascript, Level&nbsp;1`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/55/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `HTML and CSS, Level&nbsp;2`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/24/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `HTML and CSS, Level&nbsp;1`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/18/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `General English – Pre-intermediate`,
//     cert: `https://drive.google.com/file/d/1VChCHLdwiZceeUTOCq2ZoCLCGwzIV7Yc/view`,
//     company: `Skyeng`,
//   },
//   {
//     name: `General English – Elementary `,
//     cert: `https://drive.google.com/file/d/0B2WaTCbThw1GVjluTnMzZmxmV0RKWUozZHFic0xJUDZhYWVJ/view`,
//     company: `Skyeng`,
//   },
// ];

// const Skills = () => {
//   const coursesRef = useRef([]);
//   const skillsRef = useRef([]);
//   const textRef = useRef(null);
//   const tl = new TimelineLite({paused: true});

//   useEffect(() => {
//     tl.to(textRef.current, 0.6, {opacity: 1, y: 0})
//       .staggerTo(coursesRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.3`)
//       .staggerTo(skillsRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.4`)
//       .play();
//     return () => tl.clear();
//   });

//   return (
//     <section className="skills">
//       <h2 className="invisible">Skills</h2>
//       <div className="skills__col">
//         <p className="skills__subtitle slide-down" ref={textRef}>
//           Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
//           to&nbsp;keep learning, continue challenging myself, and
//           do&nbsp;interesting things that matter.
//         </p>
//         <ul className="skills__courses">
//           {courses.map(({name, cert, company}, index) => (
//             <li
//               key={name}
//               className={`slide-right`}
//               ref={(course) => (coursesRef.current[index] = course)}>
//               <p
//                 className="skills__name"
//                 dangerouslySetInnerHTML={{__html: name}}
//               />
//               <p className="skills__info">
//                {company}&nbsp;/{" "}
//                 <a
//                   href={cert}
//                   className="skills__cert-link link"
//                   target={`blank`}
//                   rel="noopener noreferrer">
//                   certificate
//                 </a>
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="skills__col">
//         <ul className="skills__list">
//           {skills.map((item, index) => (
//             <li
//               className={`slide-right`}
//               ref={(skill) => (skillsRef.current[index] = skill)}
//               key={item}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Skills;