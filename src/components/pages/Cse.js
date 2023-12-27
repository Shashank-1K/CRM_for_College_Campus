import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Cse() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Computer Science & Engineering</h1>
          <p className='fs-5'>The Department of Computer Science and Engineering (CSE), established in the year 1995, evolved towards enhancing Computing and its applications to build the intellectual capital of the society. The department is witnessing a period of exciting growth and opportunity propelled by the growth of technology and its recognition through excellence.</p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png' className='rounded'></img>
        </div>
      </div>
      <div>
      <img src='https://vnrvjiet.ac.in/assets/images/CSE%20Hod.png' width='180rem' className='mt-4'></img>
      </div>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr. S. Nagini</h5>
      <br/>
      <p className='d-inline ms-2'>CSE HOD</p>
      </div>
    </div>
  )
}

export default Cse