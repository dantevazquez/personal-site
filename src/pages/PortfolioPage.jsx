import React from 'react'
import AllProjects from '../components/AllProjects'
import './styles/portfoliopage.css'

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