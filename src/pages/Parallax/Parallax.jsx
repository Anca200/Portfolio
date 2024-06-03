import React, {useRef} from 'react';
import "./Parallax.css";
import {motion, useScroll, useTransform} from "framer-motion";



const Parallax = ({type}) => {
  const ref= useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  });



  const yText = useTransform(scrollYProgress, [0,1] , ["0%", "100%"])
  const yBg = useTransform(scrollYProgress, [0,1] , ["0%", "60%"])
  return (
    <>
    <div className='parallax'
    ref={ref}>
   <motion.h1 style={{y: yText}}>My Projects</motion.h1>
  
   <motion.div className='mountains'></motion.div>
   <motion.div style={{y: yBg}} className='planet'></motion.div>
   <motion.div style={{x: yBg}} className='stars'></motion.div>
    </div>
    </>
  )
}

export default Parallax