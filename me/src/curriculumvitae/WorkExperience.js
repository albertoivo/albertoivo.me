import React from 'react'
import { FaSuitcase, FaCalendar } from 'react-icons/lib/fa'
import { works } from '../utils/helper'

const WorkExperience = () => (
  <div>
    <h2>
      <FaSuitcase size={30} /> Work Experience
    </h2>
    {works.map((work, index) => (
      <div key={index} id="cv-content">
        <h3>
          <b>
            {work.title} / {work.local}
          </b>
        </h3>
        <h5>
          <FaCalendar />
          {work.initialDate} - {' '}
          {work.finalDate === '' ? (
            <span className="tag">Current</span>
          ) : (
            work.finalDate
          )}
        </h5>
        <hr />
      </div>
    ))}
  </div>
)

export default WorkExperience
