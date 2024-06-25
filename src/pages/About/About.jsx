import React from 'react';
import "./About.css";
import html from "../../assets/html.png";
import css from "../../assets/css.webp";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import github from "../../assets/github.svg";
import firebase from "../../assets/firebase.png";


const About = () => {
  return (
    <div className='about-container'>

        <h2 className='about-title '>Skills</h2>
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
          <div className='item-skill'>
          <img src={firebase}/>
          <p>FireBase</p>
          </div>
       </div>

       <div className='about-me'>
        <div className='about-me_container'>
        <h2 className='text-gray-200'>About Me</h2>
     
          <div className='text-gray-200'>
            <p>Familiar with <b>Firebase</b> authentication</p>
            <p>Strong knowledge of <b>responsive design</b> </p>
            <p>Familiar with <b>APIs</b>, fetching and displaying <b>data</b></p>
            <p>Beginner <b> React</b> knowledge: components, hooks, props, React Router Dom</p>
            <p><b>Tailwind</b> lover </p>
            <p>I like using <b>Vite</b> for my <b>React</b> projects</p>
            <p>Always <b>improving </b>and learning new <b>skills</b></p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default About