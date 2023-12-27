import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Ece() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className='dep fw-bold'>Department of Electronics & Communication Engineering</h1>
          <p className='fs-5'>The Department of ECE was founded in 1995 and is recognized by JNTU Hyderabad as a centre for R&D activities. The research Centre is of internationally acclaimed standards, predominantly in the areas of Communications, Signal Processing, Microelectronics and IoT. The Department has 59 well qualified and experienced faculty with 14 doctorates and 33 faculty are pursuing their doctoral degrees. Most of the faculties are associated with Research and Consultancy Cell (RCC). The RCC comprises of RFID and WSN Lab, Virtual Reality Lab, Machine Vision Lab. Presently, the Department has an intake of 240 Students for UG programme and an intake of 18 students for PG programme in VLSI System Design and Embedded Systems respectively. The department indulges in cutting edge research in the areas of Sensor Networks, Wireless Networks, Wireless Communications, Internet of Things, Cognitive Radio, Speech/Audio, Video and Biomedical Signal Processing.</p>
          </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img src='https://vnrvjiet.ac.in/assets/images/ECE_Department_Inner.png' className='rounded'></img>
        </div>
      </div>
      <img src='https://vnrvjiet.ac.in/assets/images/ece-hod.png' width='180rem' className='mt-4'></img>
      <div className='ms-5 mt-2'>
      <h5 className='d-inline ms-5 fw-bold'>Dr.S.Rajendra Prasad</h5>
      <br/>
      <p className='d-inline ms-2'>ECE HOD</p>
      </div>
    </div>
  )
}

export default Ece