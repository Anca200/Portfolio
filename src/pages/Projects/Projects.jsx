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
    desc: "For this project i used the TMDB API to fetch and display data. For the registration system i used Firebase to Sign Up and Log In and Firestore Database to store the movies added to favorite. The style was made usind Tailwind  ",
    live: "https://golden-dolphin-f31e35.netlify.app/" ,
    code: "https://github.com/Anca200/netflix-vite.git"
  },
  {
    id:2,
    title: "Crypto Search API",
    img:crypto,
    desc: "This project was made using CoinGecko API for fetching the data and changing the currency from USD to Euro. Typing in the search bar will display the searched coin, additionally by selecting a coin, a new page will open with a chart and data. The style was made with Tailwind. Firesbase authentication will be added in the future",
    live:"https://peaceful-pixie-d78816.netlify.app/",
    code: "https://github.com/Anca200/CRYPTO.gitt"
  },
  {
    id:3,
    title: "E-commerce Website",
    img: e_commerce,
    desc: "This project was my first advanced E-commerce website. The data was fetched from a json file and displayed using the map method. The products can be stored to cart, updating it based on the number added and displayed in a special page, each product contains a dedicated page as well. The style was made with CSS ",
    live: "https://euphonious-lokum-728f4a.netlify.app/",
    code:"https://github.com/Anca200/E-commerce.git" 
  
  },
  {
    id:4,
    title: "VirtualR Website",
    img: virtual,
    desc: "This is a simple landing page. I focused on the page structure and design using Tailwind",
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
     <p>{item.desc}</p>

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
