import React from 'react'
import { FaCertificate, FaCalendar } from 'react-icons/lib/fa'
import { educations } from '../utils/helper'

const Education = () => (
  <div>
    <div>
      <h2>
        <FaCertificate size={30} /> Education
      </h2>
    </div>
    {educations.map(edu => (
      <div key={edu.title} id="cv-content">
        <h3>
          <b>
            {edu.title} / {edu.local}
          </b>
        </h3>
        <h5>
          <FaCalendar />
          {edu.initialDate} - {edu.finalDate}
        </h5>
        <hr />
      </div>
    ))}
  </div>
)

export default Education
