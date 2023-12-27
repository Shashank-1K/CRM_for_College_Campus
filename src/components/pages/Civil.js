import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Civil() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Civil Engineering</h1>
          <p className='fs-5'>Civil Engineering is a broad field of engineering that deals with planning, design, construction, and maintenance of different structures like buildings, roads, bridges, canals, dams, water supply and treatment systems etc. The Department of Civil Engineering was started in the year 2001 with an annual intake of 60 undergraduate students which was subsequently raised to the present annual intake of 120 students. It also offers three PG Courses in Structural Engineering, Geo-Technical Engineering and Highway Engineering. In addition, the department is recognized as a research center by JNTUH. UG Civil Engineering program is conferred with Six years of accreditation under Tier-I consecutively for the second time in 2023 by the National Board of Accreditation (NBA), India.</p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/Civil%20engineering%202.jpg' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/CIVIL%20Hod.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>

      <h5 className='d-inline ms-5 fw-bold'>Dr.A.Mallika</h5>
      <br/>
      <p className='d-inline ms-2'>CE HOD</p>

      </div>
    </div>
  )
}

export default Civil