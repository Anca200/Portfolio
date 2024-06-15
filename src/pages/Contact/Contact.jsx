import React, { useRef, useState } from 'react';
import "./Contact.css";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import resume from "../../assets/Anca Pandeli Resume.pdf";

const variants ={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren: 0.1
    }
  }
}


const Contact = () => {
  const formRef = useRef();
  const [error, setError] =useState(false);
  const [success, setSuccess] =useState(false);
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_otsyv6e', 'template_l80klue', formRef.current, {
      publicKey: 'EN-t-AuDlH5FCjZwr',
    })
    .then(
      (result) => {
        setSuccess(true)
      
      },
      (error) => {
        setError(true)
        console.log('FAILED...', error.text);
      },
    );
};
  
  return (
    <div className='contact'
    variants={variants}
    initial ="initial"
    whileInView="animate">
 <div className='contact-text'>
 <h1>Contact me</h1>
<div className='item'>
 <h2>Email:</h2>
 <span>anca2k17@gmail.com</span>
</div>
<div className='item'>
 <h2>Download CV:</h2>
 <a href={resume}><button>Download</button></a>


</div>
 </div>

 <div className='form-container'> 
 <div className='svg-form'
  initial={{opacity:1}}
  whileInView={{opacity:0}}
  transition={{delay:1.5,duration:1}}>
 
 </div>

<form >


  <input type="text" required placeholder='Name' name="name"/>
  <input type="email" required placeholder='Email' name= "email"/>
  <textarea rows={8} placeholder='Message' name="message"/>
  
  <button type="submit">Submit</button>
  {error && "Error"}
  {success && "Success"}
</form>

 </div>
    </div>

  )
}

export default Contact