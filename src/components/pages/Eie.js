import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Eie() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Electronics Instrumentation Engineering</h1>
          <p className='fs-5'>The B.Tech, Electronics and Instrumentation Engineering (EIE) was started during the academic year 1999-2000 with an intake of 60 and has been enhanced to 120 during the academic year 2011-2012. Furthermore, M.Tech in Electronics and Instrumentation (E & I) was started during the academic year 2010-2011 respectively with the approval of AICTE and affiliated to JNTUH.</p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/EIE_Department_Inner.png' alt='Eie' className='rounded' />
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/EIE%20Hod.png' alt='eie1' width='180rem' className='mt-4' />
      <div className='ms-5 mt-2'>
        <h5 className='d-inline fw-bold'>Dr.R.Manjula Sri</h5>
        <br/>
        <p className='d-inline ms-2'>EIE HOD</p>
      </div>
    </div>
  );
}

export default Eie;
