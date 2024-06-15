import React from 'react';
import "./About.css";
import html from "../../assets/html.png";
import css from "../../assets/css.webp";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import github from "../../assets/github.svg"


const About = () => {
  return (
    <div className='about-container'>

        <h2 className='about-title'>Skills</h2>
        <div className='items'>
        <div className='item-skill'>
          <img src={html}/>
          <p>HTML</p>
          </div>
          <div className='item-skill'>
          <img src={css}/>
          <p>CSS</p>
          </div>
          <div className='item-skill'>
          <img src={javascript}/>
          <p>Javascript</p>
          </div>
          <div className='item-skill'>
          <img src={react}/>
          <p>React</p>
          </div>
          <div className='item-skill'>
          <img src={tailwind}/>
          <p>Tailwind</p>
          </div>
          <div className='item-skill'>
          <img src={git}/>
          <p>Git</p>
          </div>
          <div className='item-skill'>
          <img src={github}/>
          <p>GitHub</p>
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
    </div>
  )
}

export default About