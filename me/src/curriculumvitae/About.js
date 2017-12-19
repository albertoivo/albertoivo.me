import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaGithub,
  FaAsterisk,
  FaGlobe
} from 'react-icons/lib/fa'
import { MdPhotoCamera, MdSchool } from 'react-icons/lib/md'
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
        <FaEnvelope size={25} />
        <a href="mailto:albertoivo@gmail.com?Subject=Contact" target="_top">
          albertoivo@gmail.com
        </a>
      </p>
      <p>
        <FaGithub size={25} />{' '}
        <a
          href="https://github.com/albertoivo"
          target="_blank"
          rel="noopener noreferrer"
        >
          /albertoivo
        </a>
      </p>
      <p>
        <MdPhotoCamera size={25} /> <Link to="/portfolio">Portfolio</Link>
      </p>
      <p>
        <MdSchool size={25} />{' '}
        <a
          href="http://lattes.cnpq.br/7655895075112450"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lattes
        </a>
      </p>

      <hr />

      <h3>
        <FaAsterisk /> Skills
      </h3>

      <div id="skills">
        {skills().map(skill => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
      <h3>
        <FaGlobe /> Languages
      </h3>

      <div id="languages">
        {languages.map((lang, index) => (
          <div key={index}>
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
