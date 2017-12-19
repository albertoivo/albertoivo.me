import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/lib/fa'
import { MdLocalAirport, MdPhotoLibrary, MdCode } from 'react-icons/lib/md'
import { TiPencil } from 'react-icons/lib/ti'

const Info = () => (
  <div id="info">
    <p className="section-title">Information</p>
    <p className="section-subtitle">Key features</p>
    <div id="info-key">
      <div>
        <FaHeart size={64} />
        Passionate about programming, travel, photographs, learn new techs and
        share knowledge.
      </div>

      <div>
        <MdCode size={64} />
        Some nerd stuff that I love to write.
      </div>

      <div>
        <MdPhotoLibrary size={64} />
        Visit my <Link to="/portfolio">portfolio</Link>. Some photos taken in
        our travels.
      </div>

      <div>
        <MdLocalAirport size={64} />
        Please, get to know our travel blog and our{' '}
        <a href="https://www.instagram.com/nossasrotas/">instagram account</a> -
        Nossas Rotas.
      </div>

      <div>
        <TiPencil size={64} />
        A <Link to="/curriculum">little</Link> about my academic and
        professional life.
      </div>
    </div>
  </div>
)

export default Info
