import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import GameManager from './pages/GameManager';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useState } from 'react';
import './darkMode.css';
import { useEffect } from 'react';

const App = () => {
  const halfScreenSize = window.innerWidth / 2; // Half of the screen size
  const stepSize = 10;
  const initialPosition = Math.round(halfScreenSize / stepSize) * stepSize;
  const [position, setPosition] = useState(initialPosition); // Stickman's position on the line
  const [isMuted, setIsMuted] = useState(true);
  const [theme, setTheme] = useState('doodle');

  useEffect(() => {
    // Check if the user's system preference is dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('doodle dark');
    }
  }, []);
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<GameManager isMuted={isMuted} position={position} setPosition={setPosition} theme={theme}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer isMuted={isMuted} setIsMuted={setIsMuted} theme={theme} setTheme={setTheme} />
    </Router>
  );
};

export default App;
