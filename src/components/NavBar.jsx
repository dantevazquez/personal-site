import React from 'react';
import './styles/navbar.css';
import 'doodle.css/doodle.css';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className='nav-container'>
      <div className='logo-container'>
        <a href='/'><img src={logo} alt='Logo' /></a>
      </div>
      <div className='button-container'>
        {location.pathname !== '/' && <button className='doodle nav-button' onClick={handleHomeClick}>{'<'}</button>}
        <button className='nav-button' onClick={handleAboutClick}>About</button>
        <button className='nav-button' onClick={handlePortfolioClick}>Projects</button>
      </div>
    </nav>
  );
}

export default NavBar;
