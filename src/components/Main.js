import React, { useRef, useEffect, useState } from 'react';
// import Typed from 'react-typed';
import myImage from './../assets/laptopImage.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Typewriter from './Typewriter';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import './Slide.css';


function Main({source}) {

    const [isVisible, setIsVisible] = useState(false);
    const animatedRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this threshold as needed
      };
  
      const observer = new IntersectionObserver(handleIntersect, options);
      if (animatedRef.current) {
        observer.observe(animatedRef.current);
      }
  
      return () => {
        if (animatedRef.current) {
          observer.unobserve(animatedRef.current);
        }
      };
    }, []);
  
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };
 
    
    return (
    <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
        <div className="scroll-animation-trigger" ref={animatedRef}></div>
             <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <Slide direction="right" in={isVisible} timeout={{ enter: 1500, exit: 500 }}> 
                 <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#6297c5;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#6297c5;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#20262E]">MJ</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
                        I'm a Bachelor of Science in Information and Technology graduate from Mindoro State University. I enjoy web development and would love to have the opportunity to become part of the IT industry. I have created projects using CodeIgniter 3 with MySQL implementation. I am capable with PHP, JavaScript, C#, and Python programming languages.
                    </p>
                    <div className='flex gap-5 mt-7'>
                    <a href={source} target='_blank' rel='noreferrer' className='flex items-center bg-[#9BABB8] text-white px-4 py-2 rounded-md text-sm'>
                        View my Resume
                    </a>
                 </div>
                    
                </div>
                </Slide> 
                <Grow in={isVisible} timeout={{ enter: 1500, exit: 500 }}> 
                <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
                    <div className="box" >
                        <div className="h-full justify-end flex items-center sm:justify-center">
                            <img
                                src={myImage}
                                alt="main"
                                className="h-[50%] mr-16 mt-20 min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
                            />
                        </div>

                    </div>
                
                </div>
                </Grow>
                <div className="flex place-content-center mt-7 mr-10">
                        <div className="flex flex-row sm:flex-col gap-4">
                            <a rel="noreferrer" href="https://www.linkedin.com/in/marc-junelle-v-zamora-561390221/" target="_blank">
                                <AiFillLinkedin size={40} className="cursor-pointer" />
                            </a>
                            <a rel="noreferrer" href="https://github.com/Marxasm" target="_blank">
                                <AiFillGithub size={40} className="cursor-pointer" />
                            </a>
                        </div>
                    </div>
            </div>
            
    </div>
    );
}

export default Main;
