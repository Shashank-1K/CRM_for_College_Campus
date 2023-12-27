import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Automobile() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Automobile Engineering</h1>
          <p className='fs-5'>The department of automobile engineering commenced with an undergraduate programme in the year 2010. Keeping itself up-to-date with the latest developments in the field with a dedicated team of highly qualified and experienced faculty in various streams of automobile engineering, the department consistently strives to provide world-class facilities for education and research. The department has laboratories with modern and state-of-the-art equipment, well-furnished seminar hall and a library with a collection of various journals, magazines and books.The department trains the students to meet the technological challenges and diverse needs of the industry and society in various areas of automobile engineering and equips them to excel in a truly competitive industry
          </p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/Automobile_Department_Inner.png' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/AME%20Hod.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr.T.Srinivasa Rao</h5>
      <br/>
      <p className='d-inline ms-2'>AE HOD</p>

      </div>
    </div>
  )
}

export default Automobile