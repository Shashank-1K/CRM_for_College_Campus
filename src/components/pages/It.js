import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Itimg from '../../images/departments/IT.jpg'
function It() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Information Technology</h1>
          <p className='fs-5'>The department of Information Technology was established in the year 1997 with an annual intake of 60, increased to 180 in the year 2017. M.Tech (CNIS) Programme started in the year 2013 with an intake of 18. It has all infrastructural facilities required for imparting high quality education and the department is fully structured to meet the contemporary needs of the industry. Imparting high quality education is supported by well qualified and experienced faculty, further support is extended by technically skilled and competent programmers.</p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src="https://vnrvjiet.ac.in/assets/images/IT_Department_Inner.png" alt='It' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/Dr-D-Srinivasa%20Rao.jpg' alt='It1' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr.D.Srinivasa Rao</h5>
      <br/>
      <p className='d-inline ms-2'>IT HOD</p>
      </div>
    </div>
  )
}

export default It