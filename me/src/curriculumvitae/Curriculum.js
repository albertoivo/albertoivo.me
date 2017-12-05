import React from 'react'
import './curriculum.css'

const Curriculum = () => (
  <div>
    <div className="wrapper">
      <div className="about">1</div>
      <div className="workExperience">2</div>
      <div className="education">3</div>
    </div>
    <footer className="footer">
      <p>Find me on social media</p>
      <p>
        Powered by{' '}
        <a
          href="http://albertoivo.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          albertoivo.me
        </a>
      </p>
    </footer>
  </div>
)

export default Curriculum
