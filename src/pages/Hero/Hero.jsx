import React from 'react';
import "./Hero.css";
import Navbar from '../../components/Navbar';
import hero_img from "../../assets/hero-img.png";
import mouse from "../../assets/mouse.svg";
import { motion} from 'framer-motion';
import arrow from "../../assets/up-arrow.png";

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
    <motion.button whileTap={{scale:0.85}} >Check out my projects</motion.button>
    <a href="#About"><motion.img  variants={textVariants} animate="scrollButton"  src={mouse} alt=""/></a>
    </motion.div>
    </div>
    
    <div className='imageContainer'>
     <motion.img variants={textVariants} animate="scrollImg" src={hero_img} alt=""/>
    </div>
    <a href="#Home"><div className="scroll-home">
   <img src={arrow} alt=""/>
    </div></a>
  </div>
  </>
  )
}

export default Hero