import React from 'react'
import './styles/aboutpage.css'
import 'doodle.css/doodle.css'
import INFO from '../data/user'
import Socials from '../components/Socials'

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-right-side">
          <h1 className="title about-title">
            {INFO.about.title}
          </h1>

          <div className="subtitle about-subtitle">
            {INFO.about.description}
          </div>
        </div>

        <div className="about-left-side">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src={INFO.about.image}
                alt="about"
                className="about-image"
                style={{border:'none'}}
              />
            </div>
          </div>

          <div className="about-socials">
            <Socials />
          </div>
        </div>
      </div>
      <div className="about-socials-mobile">
        <Socials />
      </div>
    </div>
  )
}

export default AboutPage