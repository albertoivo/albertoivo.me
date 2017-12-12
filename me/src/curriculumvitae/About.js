import React from 'react'
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaGithub,
  FaAsterisk,
  FaGlobe
} from 'react-icons/lib/fa'
import tromso from '../images/alberto-ivo-me.jpg'

const About = () => (
  <div>
    <div id="picture-name-about">
      <img src={tromso} className="imageCV" alt="Alberto Ivo Vieira" />
      <div className="display-bottomleft">
        <h2>Alberto Ivo Vieira</h2>
      </div>
    </div>
    <div id="cv-content">
      <p>
        <FaBriefcase size={25} /> Full Stack Developer
      </p>
      <p>
        <FaHome size={25} /> Brasília, Brazil
      </p>
      <p>
        <FaEnvelope size={25} /> albertoivo@gmail.com
      </p>
      <p>
        <FaGithub size={25} /> /albertoivo
      </p>

      <hr />

      <h3>
        <FaAsterisk /> Skills
      </h3>
      <h3>
        <FaGlobe /> Languages
      </h3>
      <p>Portuguese</p>
      <div className="real-progress" />
      <p>English</p>
      <div className="full-progress">
        <div className="real-progress" style={{ width: '90%' }} />
      </div>
      <p>Spanish</p>
      <div className="full-progress">
        <div className="real-progress" style={{ width: '50%' }} />
      </div>
    </div>
  </div>
)

export default About
