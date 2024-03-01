import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";
import './styles/footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <a href="https://github.com/dantevazquez" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/dantevazquez" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={30} />
        </a>
        <a href="mailto:dantevazquezrivera@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoIosMail size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
