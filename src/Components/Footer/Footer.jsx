import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import './Footer.scss' ;

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/amaansodagar786" target='_blank'><FaGithub/></a>
        <a href='mailTo:sodagaramaan786@gmail.com' target='_blank'><GrMail/></a>
        <a href='https://www.instagram.com/amaan_sodagar/?hl=en' target='_blank'><FaInstagram/></a>
        <a href='https://www.linkedin.com/in/amaan-sodagar-67b640215/' target='_blank'><FaLinkedin/></a>
        <a href='https://wa.me/918401273528' target='_blank'><FaWhatsapp/></a>
      </div>
    </footer>
  )
}

export default Footer
