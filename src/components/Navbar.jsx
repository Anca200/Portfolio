import React from 'react';
import "./Navbar.css";


const Navbar = () => {
  return (
   <>
   <nav>
    <ul className='links'>
        <a href="#About"><li>About</li></a>
        <a href="#Projects"><li>Projects</li></a>
        <a href="#Contact"><li>Contact</li></a>    
    </ul>
   </nav>
   </>
  )
}

export default Navbar