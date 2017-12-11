import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/lib/fa'
import { MdLocalAirport, MdPhotoLibrary } from 'react-icons/lib/md'
import { TiPencil } from 'react-icons/lib/ti'

const About = () => (
  <div id="about">
    <div>
      <FaHeart size={64} />
      Passionate about programming, travel, photographs, sharing knowledge and,
      of course, my wife.
    </div>

    <div>
      <MdPhotoLibrary size={64} />
      Visit my <Link to="/portfolio">portfolio</Link>. Some photos taken in our
      travels.
    </div>

    <div>
      <MdLocalAirport size={64} />
      Please, get to know our travel blog and our{' '}
      <a href="https://www.instagram.com/nossasrotas/">instagram account</a> -
      Nossas Rotas.
    </div>

    <div>
      <TiPencil size={64} />
      A little about my academic and professional life.
    </div>
  </div>
)

export default About
