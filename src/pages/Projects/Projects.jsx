import React, { useRef } from 'react';
import "./Projects.css";
import e_commerce from "../../assets/E-commerce.png";
import netflix from "../../assets/netflix-img.png"
import {motion, useScroll, useSpring} from "framer-motion";
import github from "../../assets/github.png";
import virtual from "../../assets/VirtualR.png"
import crypto from "../../assets/crypto-img.png"

const items = [
  {
    id:1,
    title: "Netflix Clone",
    img: netflix,
    desc: "This project provided me with a foundational understanding of API integration and its implementation within a React application. For the first time, I learned how to connect to an external API and dynamically fetch and display data. The application features a search bar where users can input the name of a movie. Upon submission, the relevant movie data is retrieved from the API and rendered on the page.",
    live: "https://golden-dolphin-f31e35.netlify.app/" ,
    code: "https://github.com/Anca200/netflix-vite.git"
  },
  {
    id:2,
    title: "Crypto Search Website",
    img:crypto,
    desc: "This project provided a comprehensive introduction to React and reinforced the importance of component-based architecture in modern web development.The use of props allowed for efficient data transfer between components, facilitating a seamless and dynamic user experience.  ",
    live:"https://peaceful-pixie-d78816.netlify.app/",
    code: "https://github.com/Anca200/CRYPTO.gitt"
  },
  {
    id:3,
    title: "E-commerce",
    img: e_commerce,
    desc: "This project was my initial foray into building an e-commerce website with React. Through this experience, I gained valuable insights into the architecture and development process of an e-commerce platform. I had fun building this project",
    live: "https://euphonious-lokum-728f4a.netlify.app/",
    code:"https://github.com/Anca200/E-commerce.git" 
  
  },
  {
    id:4,
    title: "VirtualR Website",
    img: virtual,
    desc: "This project encompasses the development of a two-player Pong game using JavaScript. The creation of this game was an engaging experience that significantly enhanced my understanding of JavaScript. In this game, one player utilizes the 'WASD' keys for control, while the other player uses the arrow keys.",
    live: "https://gorgeous-babka-fa922f.netlify.app/",
    code:"https://github.com/Anca200/Website-VirtualR.git"
  }
];

const Single = ({item}) => {
  const ref=useRef();


  return(
    <section ref={ref}>
     <div className='container-project'>
      <div className='container-img'>
      <img src={item.img} alt=""/>
      </div> 
       <div className='text-wrapper'> 
     <h2>{item.title}</h2>

     <a href={item.live} target="_blank"><button className='live'>Live</button></a>
     <a href={item.code} target="_blank"><button className='live'>Code</button></a>
     </div>
     </div>
    </section>
  )
}
const Project_1 = () => {
 const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  });


  return (
    <div className='projects' ref={ref}>
      <div className='progress'>
         <h1>Projects</h1>
        <a href="https://github.com/Anca200" target='_blank'> <img src={github} alt=""/></a>
        <motion.div style={{scaleX:scaleX}} className='progressBar'>

        </motion.div>
      </div>
 {items.map((item =>(
  <Single item={item} key={item.id}/>
 )))}

    </div>
  )
}

export default Project_1
