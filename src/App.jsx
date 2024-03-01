import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManager from './pages/GameManager';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<GameManager />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<PortfolioPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
