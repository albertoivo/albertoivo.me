import React from 'react'
import { FaCertificate, FaCalendar } from 'react-icons/lib/fa'

const Education = () => (
  <div>
    <div>
      <h2>
        <FaCertificate size={30} /> Education
      </h2>
    </div>
    <div id="cv-content">
      <h3>
        <b>Nanodegree React Developer / Udacity.com</b>
      </h3>
      <h5>
        <FaCalendar />2017 - 2018
      </h5>
      <hr />
      <h3>
        <b>MBA - IT Project Management / POSUGF.com.br</b>
      </h3>
      <h5>
        <FaCalendar />2010 - 2011
      </h5>
      <hr />
      <h3>
        <b>Post-Graduation - Test Engineer / UFPE.br</b>
      </h3>
      <h5>
        <FaCalendar />2018
      </h5>
      <hr />
      <h3>
        <b>Computer Science / Unipe.br</b>
      </h3>
      <h5>
        <FaCalendar />2003 - 2006
      </h5>
    </div>
  </div>
)

export default Education
