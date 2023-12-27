import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function HandS() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Humanities & Sciences</h1>
          <p className='fs-5'>The Humanities and Sciences Department started functioning right from the inception of the Institute in the year 1995. The Department comprises five disciplines namely, English, Mathematics, Physics, Chemistry and Management Sciences. As an integral part of the institute, the prime focus of H & S Department is to provide a conceptual base in Basic Sciences which form a foundation to the Engineering subjects. Apart from this, the department is instrumental in grooming the students into competent Engineers and individuals through training in Soft Skills and Managerial Economics ready to compete for global opportunities.</p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/HS_Department_Inner.png' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/H&S%20Hod.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr.T.Jayashree</h5>
      <br/>
      <p className='d-inline ms-2'>H&S HOD</p>
      </div>
    </div>
  )
}

export default HandS