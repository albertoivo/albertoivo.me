import React from 'react'
import { FaHeart } from 'react-icons/lib/fa'
import { GoCode } from 'react-icons/lib/go'
import { MdLocalAirport } from 'react-icons/lib/md'
import { TiPencil } from 'react-icons/lib/ti'

const About = () => (
  <div id="about">
    <div>
      <FaHeart size={64} className="icon" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </div>

    <div>
      <GoCode size={64} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </div>

    <div>
      <MdLocalAirport size={64} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </div>

    <div>
      <TiPencil size={64} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </div>
  </div>
)

export default About
