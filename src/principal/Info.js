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
      <section>
        <FaHeart size={64} />
        <div>
          Passionate about programming, travel, photographs, and
          share knowledge.
        </div>
      </section>

      <section>
        <MdCode size={64} />
        <div>
          Some nerd stuff that I love to{' '}
          <a href="https://albertoivo.github.io/" target="_blank" rel="noopener noreferrer">write</a>.
        </div>
      </section>

      <section>
        <MdPhotoLibrary size={64} />
        <div>
          Visit my <Link to="/portfolio">portfolio</Link>. Some photos taken in
          our travels.
        </div>
      </section>

      <section>
        <MdLocalAirport size={64} />
        <div>
          Please, get to know our our{' '}
          <a href="https://www.instagram.com/nossasrotas/"
            target="_blank" rel="noopener noreferrer">
            instagram account
          </a>{' '}
            - Nossas Rotas.
        </div>
      </section>

      <section>
        <TiPencil size={64} />
        <div>
          A <Link to="/curriculum">little</Link> about my academic and professional life.
        </div>
      </section>
    </div>
  </div>
)

export default Info
