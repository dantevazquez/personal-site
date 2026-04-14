import React, { useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail, IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";
import './styles/footer.css';
import 'doodle.css/doodle.css';
import INFO from '../data/user';
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { useEffect } from 'react';
import '../darkMode.css'

function Footer({isMuted, setIsMuted, theme, setTheme}) {

  const [iconStatus, setIconStatus] = useState(false);
  const handleSoundToggle = () =>{
    setIsMuted(!isMuted);
  }

  const toggleTheme = () => {
    if (theme === 'doodle') {
      setTheme('doodle dark');
      setIconStatus(false)
    } else {
      setTheme('doodle');
      setIconStatus(true);
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={30} color={theme === 'doodle' ? 'black' : 'white'}/>
        </a>
        <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={30} color={theme === 'doodle' ? 'black' : 'white'}/>
        </a>
        <a href={INFO.main.email} target="_blank" rel="noopener noreferrer">
          <IoIosMail size={30} color={theme === 'doodle' ? 'black' : 'white'}/>
        </a>
      </div>
      <div className='footer-icons'>
        <a onClick={handleSoundToggle}>
          {isMuted ? <IoIosVolumeOff size={30} color={theme === 'doodle' ? 'black' : 'white'}/> : <IoIosVolumeHigh size={30} color={theme === 'doodle' ? 'black' : 'white'}/>}
        </a>
        <a onClick={toggleTheme}>
          {iconStatus ? <IoIosMoon size={30} color={theme === 'doodle' ? 'black' : 'white'}/> : <IoIosSunny size={30} color={theme === 'doodle' ? 'black' : 'white'} />}
        </a>
      </div>
    </div>
  );
}

export default Footer;
