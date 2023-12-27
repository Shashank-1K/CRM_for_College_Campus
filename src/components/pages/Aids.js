import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import AidsImg from '../../images/departments/aids.jpg'
function Aids() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Artificial Intelligence & Data Science, CSE-Cyber Security, Data Science</h1>
          <p className='fs-5'>Welcome to the Department of CSE- DS, CyS. This department is established in 2020 with the DS and CyS B.Tech. program with the intake of 120 and 60 respectively and in the year 2021 started with the AI & DS B.Tech. program with a intake of 60. This department is dedicated to explore the fascinating fields of Data Science, AI, and Cyber Security issues equipping the students with the knowledge and skills to excel in these rapidly evolving domains.</p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src="https://vnrvjiet.ac.in/assets/images/CSE%20-%20DS%20&%20CYS%20(1).png" className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/Dr-Rajasekar-M.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr.Rajasekhar M.</h5>
      <br/>
      <p className='d-inline ms-2'>CSE-AIDS HOD</p>
      </div>
    </div>
  )
}

export default Aids