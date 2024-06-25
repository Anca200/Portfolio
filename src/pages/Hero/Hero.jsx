import React from 'react';
import "./Hero.css";
import Navbar from '../../components/Navbar';
import mouse from "../../assets/mouse.svg";
import { motion} from 'framer-motion';
import HeaderBar from "../../components/HeaderBar";
import { IoIosArrowUp } from "react-icons/io";
import mobile from "../../assets/mobile.png"

// animation
const textVariants = {
  initial: {
    x: -500,
    opacity:0
  },
    animate: {
       x:0,
       opacity: 1,
       transition:{
        duration:1,
        staggerChildren:0.1,
       },
    },
    scrollButton:{
      opacity: 0,
      y:10,
      transition:{
        duration: 2,
        repeat:Infinity
      }
    }
  }
{/*text animation*/}


const Hero = () => {
  return (
  <>
  <Navbar/>

  <div className='hero'>

    <div className='wrapper'>
    <motion.div className='textContainer'
    variants={textVariants}
    initial = "initial"
    animate ="animate">
    <h2 >Hi &#128075; I'm a Junior React  <span className='span-1  '>Web Developer</span></h2>
    <p  ><span className='span-2'>My name is <b>Anca </b>!</span> <br/> I'm passionate about creating user-friendly interfaces that seamlessly blend cutting-edge design with robust functionality, driving optimal user experiences and elevating digital presence</p>
    <a href="#Projects"><motion.button whileTap={{scale:0.85}} >Check out my projects</motion.button></a>
    <a href="#About"><motion.img  variants={textVariants} animate="scrollButton"  src={mouse} alt=""/></a>
    </motion.div>
    </div>
    
    <div className='imageContainer rounded-[24px]'
      style = {{
      transformStyle: "preserve-3d",
       transform: "rotateY(-30deg) rotateX(15deg)"}}>
        
       <motion.div className='relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-transparent   p-1 pl-[3px] pt-[3px] phone-body'
       initial = {{
        transform : "translateZ(8px) translateY(-2px)",
       }}
       animate = {{
        transform: "translateZ(32px) translateY(-8px),"
       }}
       transition = {{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut"
       }}
       >
        <img src={mobile}  className='h-full rounded-[20px]'/>
       <HeaderBar/>
       </motion.div>
    </div>
    <a href="#Home"><div className="scroll-home">
    <IoIosArrowUp size={35} className='m-auto mt-[5px]'/>
    </div></a>
  </div>
  </>
  )
}

export default Hero