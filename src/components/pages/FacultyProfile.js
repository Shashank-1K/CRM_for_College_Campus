import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {auth} from "../../firebaseconfig"
import { signOut } from 'firebase/auth';
import { IoLogOut } from "react-icons/io5";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { db } from '../../firebaseconfig';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import './Profile.css'
import PopupFormFaculty from './PopupFormFaculty';
import { FaDatabase } from "react-icons/fa";
function FacultyProfile() {
  const navigate = useNavigate()
  const [isopen,setIsopen] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("currentuser"))
  console.log(user);
  let [userdetails, setUserDetails] = useState()
  useEffect(() => {
    getDoc(doc(db, "faculty", user?.uid))
      .then((userdata) => setUserDetails(userdata.data()))
      .catch((err) => console.error(err))
  }, [user?.uid])
  const Logout = () =>{
    signOut(auth)
    .then((res)=>{
        window.localStorage.clear();
        navigate('/')
    })
    .catch((err)=>console.log(err));
  }
  return (
    <div className='mainbody'>
      <section>
        <MDBContainer className="py-5">
          <Navbar className="border imgback rounded-3 p-3 mb-5">
            <Container>
              <Navbar.Brand className='subbody'>
                <img src="https://vnrvjiet.ac.in/assets/images/VNR.png" alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <a href="/FacultyData"><button className='btn text-light'>Students & Faculty Data  <FaDatabase /></button></a>
                  <button onClick={Logout} className='btn text-light'>Sign Out  <IoLogOut /></button>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={`https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-7120.jpg?w=740`}
                    alt="avatar"
                    className="rounded"
                    style={{ width: '150px' }}
                    fluid />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBCardText className='d-flex justify-content-end'>
                        <button onClick={()=>setIsopen(!isopen)} className='btn'>Edit <FaEdit /></button>
                        {console.log(isopen)}
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <FaLinkedin />
                      <MDBCardText><a href={userdetails?.linkedin}>{userdetails?.linkedin}</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <FaGithub />
                      <MDBCardText><a href={userdetails?.github}>{userdetails?.github}</a></MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Department</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userdetails?.department}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userdetails?.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userdetails?.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Subject</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userdetails?.subject}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              {isopen && <PopupFormFaculty/>}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  )
}

export default FacultyProfile
