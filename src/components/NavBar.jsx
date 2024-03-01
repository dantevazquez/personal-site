import React from 'react';
import './styles/navbar.css';
import 'doodle.css/doodle.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about')
  };

  const handlePortfolioClick = () => {
    navigate('/projects')
  };

  return (
    <nav className='doodle nav-container'>
      <div className='doodle logo-container'>
        {/* Replace 'Logo' with your actual logo */}
        <a href='/'><img src={logo} alt='Logo' /></a>
      </div>
      <div className='doodle button-container'>
        <button className='doodle nav-button' onClick={handleHomeClick}>Home</button>
        <button className='doodle nav-button' onClick={handleAboutClick}>About</button>
        <button className='doodle nav-button' onClick={handlePortfolioClick}>Portfolio</button>
      </div>
    </nav>
  );
}

export default NavBar;
