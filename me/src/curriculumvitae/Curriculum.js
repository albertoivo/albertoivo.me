import React from 'react'
import About from './About'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Footer from './Footer'
import './curriculum.css'

const Curriculum = () => (
  <div>
    <div className="cv-container">
      <div className="about">
        <About />
      </div>
      <div className="workExperience">
        <WorkExperience />
      </div>
      <div className="education">
        <Education />
      </div>
    </div>
    <footer className="cv-footer">
      <Footer />
    </footer>
  </div>
)

export default Curriculum
