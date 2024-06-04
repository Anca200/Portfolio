import React from 'react';
import "./Hero.css";
import Navbar from '../../components/Navbar';
import mouse from "../../assets/mouse.svg";
import { motion} from 'framer-motion';
import arrow from "../../assets/up-arrow.png";
import HeaderBar from "../../components/HeaderBar";

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
    <h2  >Hi &#128075; I'm a Front-end <span className='span-1'>Developer</span></h2>
    <p  ><span className='span-2'>My name is Anca !</span> <br/>I specialize in crafting user-friendly interfaces that seamlessly blend cutting-edge design with robust functionality, driving optimal user experiences and elevating digital presence</p>
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
       <HeaderBar/>
       </motion.div>
    </div>
    <a href="#Home"><div className="scroll-home">
   <img src={arrow} alt=""/>
    </div></a>
  </div>
  </>
  )
}

export default Hero