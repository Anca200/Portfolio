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
    <motion.div className='contact'
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
 <motion.div className='svg-form'
  initial={{opacity:1}}
  whileInView={{opacity:0}}
  transition={{delay:1.5,duration:1}}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="#111132" viewBox="0 0 512 512"><path strokeWidth={0.2}  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
 </motion.div>

<motion.form 
ref={formRef}
onSubmit={sendEmail}
 initial={{opacity:0}}
 whileInView={{opacity:1}}
 transition={{delay: 2.5,duration:1}}>

  <input type="text" required placeholder='Name' name="name" className='p-5'/>
  <input type="email" required placeholder='Email' name= "email"/>
  <textarea rows={8} placeholder='Message' name="message"/>
  
  <button type="submit">Submit</button>
  {error && "Error"}
  {success && "Success"}
</motion.form>

 </div>
    </motion.div>

  )
}

export default Contact