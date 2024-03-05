import React from 'react'
import './styles/portfoliopage.css'
import AllProjects from '../components/AllProjects'


function PortfolioPage() {
  return (
    <div className="projects-container">

    <div className="projects-list">
      <AllProjects/>
    </div>
  </div>
  )
}

export default PortfolioPage