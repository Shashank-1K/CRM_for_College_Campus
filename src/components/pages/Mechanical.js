import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Mechanical() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Mechanical Engineering</h1>
          <p className='fs-5'>The department was established at the time of inception of the institute in the year 1995. The department offers one undergraduate program - B.Tech. (Mechanical Engineering) and two post graduate programs - M.Tech in Advanced Manufacturing Systems and M.Tech. in CAD/CAM. Also, the department offers Ph.D. degree through AICTE-NDF scheme and JNTUH. The mechanical engineering department at the VNR VJIET is one of the top-ranked, attracting the highest quality of students and faculty members.</p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/Mech_Department_Inner.png' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/MECH%20Hod.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>

      <h5 className='d-inline ms-5 fw-bold'>Dr.B.Satyanarayana</h5>
      <br/>
      <p className='d-inline ms-2'>EIE HOD</p>
      </div>
    </div>
  )
}

export default Mechanical