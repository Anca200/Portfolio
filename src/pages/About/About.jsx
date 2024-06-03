import React from 'react';
import "./About.css";
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion} from 'framer-motion';


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
    },}
const About = () => {
  return (
    <motion.div className='about-container'
    variants={textVariants}
    initial = "initial"
    animate ="animate">
       <div className='about-skills'>
        <h2>Skills</h2>
        <div className='items'>
        <div className='item-skill'>
          <span id="html"><FaHtml5/></span>
          <p>HTML</p>
          </div>
          <div className='item-skill'>
          <span id="css"><FaCss3Alt /></span>
          <p>CSS</p>
          </div>
          <div className='item-skill'>
          <span id="js"><RiJavascriptFill /></span>
          <p>Javascript</p>
          </div>
          <div className='item-skill'>
          <span id="react"><RiReactjsLine/></span>
          <p>React</p>
          </div>
          <div className='item-skill'>
          <span id="git"><FaGitAlt /></span>
          <p>Git</p>
          </div>
          <div className='item-skill'>
          <span id="github"><FaGithub /></span>
          <p>GitHub</p>
          </div>
        </div>
       </div>

       <div className='about-me'>
        <div className='about-me_container'>
        <h2>About Me</h2>
          <p >I thrive on solving complex problems and optimizing code for performance and maintainability.<br/>
          Constantly staying updated with emerging technologies and industry trends fuels my passion for continuous learning and innovation in front-end development.<br/>
          I possess strong creative instincts, allowing me to transform design concepts into engaging and visually striking user experiences.
          </p>
        </div>
       
       </div>
    </motion.div>
  )
}

export default About