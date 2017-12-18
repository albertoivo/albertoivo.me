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
import { skills, languages } from '../utils/helper'

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

      <div id="skills">
        {skills().map(skill => <span className="tag">{skill}</span>)}
      </div>
      <h3>
        <FaGlobe /> Languages
      </h3>

      <div id="languages">
        {languages.map(lang => (
          <div>
            <p>{lang.name}</p>
            <div className="full-progress">
              <div
                className="real-progress"
                style={{ width: lang.knowledge }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default About
