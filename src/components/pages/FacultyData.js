import "./StudentsData.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiFolder2Line,
  RiStackLine,
} from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { onValue, ref,push } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { realtimedb } from '../../firebaseconfig'
import { jsPDF } from "jspdf";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
function FacultyData() {
  let [studentsData, setStudentsData] = useState();
  const [selectedStudents, setSelectedStudents] = useState([]);
  let [facultyData,setFacultyData] = useState();
  const handleCheckboxChange = (rollno) => {
    const updatedSelectedStudents = [...selectedStudents];
    const index = updatedSelectedStudents.indexOf(rollno);

    if (index === -1) {
      updatedSelectedStudents.push(rollno);
    } else {
      updatedSelectedStudents.splice(index, 1);
    }

    setSelectedStudents(updatedSelectedStudents);
  };
  const saveAttendance = () => {
    const attendanceRef = ref(realtimedb, "attendance/");
    const timestamp = new Date().toLocaleString();
    const data = {
      timestamp,
      students: selectedStudents,
    };
    push(attendanceRef, data);
    alert("Attendance saved successfully!");
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    pdf.text("Attendance Details", 20, 10);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 20);
    pdf.text(`Time: ${new Date().toLocaleTimeString()}`, 20, 30);

    pdf.text("presentees", 20, 50);
    selectedStudents.forEach((student, index) => {
      pdf.text(`${index + 1}. ${student}`, 20, 60 + 10 * index);
    });

    pdf.save("attendance.pdf");
  };
  const navigate = useNavigate()
  const getSecttionData = (section) => {
    const reference = ref(realtimedb, "students/departments/" + section)
    onValue(reference, (snapshot) => {
      setStudentsData(snapshot.val())
      setFacultyData()
      setSelectedStudents([]);
    })
  }
  const getFacultyData = (section) => {
    const reference = ref(realtimedb, "faculty/faculty/departments/"+ section)
    onValue(reference, (snapshot) => {
      setFacultyData(snapshot.val())
      setStudentsData()
    })
  }
  return (
    <div>
      
      <div style={{backgroundColor:"#82001a"}}>
        <Sidebar style={{height: "100%", position:"absolute",backgroundColor:"#82001a"}}>
        <main>
          <Menu>
              <MenuItem>
                <div
                  style={{
                    padding: "9px",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  <img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-75" alt="logo" />
                </div>
              </MenuItem>
            <hr />
          </Menu>
          <Menu>
            <MenuItem onClick={() => navigate("/FacultyProfile")} icon={<RiHome4Line />}>Profile</MenuItem>
            <SubMenu label={"Students"} icon={<RiTeamLine />}>
              <SubMenu label={"IT"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/0/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/0/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
                <MenuItem onClick={() => getSecttionData("/0/section/C")} icon={<RiStackLine />}>Section C</MenuItem>
              </SubMenu>
              <SubMenu label={"CSE"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/1/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/1/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
                <MenuItem onClick={() => getSecttionData("/1/section/C")} icon={<RiStackLine />}>Section C</MenuItem>
                <MenuItem onClick={() => getSecttionData("/1/section/D")} icon={<RiStackLine />}>Section D</MenuItem>
              </SubMenu>
              <SubMenu label={"ECE"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/2/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/2/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
                <MenuItem onClick={() => getSecttionData("/2/section/C")} icon={<RiStackLine />}>Section C</MenuItem>
                <MenuItem onClick={() => getSecttionData("/2/section/D")} icon={<RiStackLine />}>Section D</MenuItem>
              </SubMenu>
              <SubMenu label={"Mech"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/3/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/3/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
              </SubMenu>
              <SubMenu label={"Civil"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/4/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/4/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
              </SubMenu>
              <SubMenu label={"EEE"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/5/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/5/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
              </SubMenu>
              <SubMenu label={"CSBS"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/6/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
              </SubMenu>
              <SubMenu label={"AIML"} icon={<RiFolder2Line />}>
                <MenuItem onClick={() => getSecttionData("/7/section/A")} icon={<RiStackLine />}>Section A</MenuItem>
                <MenuItem onClick={() => getSecttionData("/7/section/B")} icon={<RiStackLine />}>Section B</MenuItem>
                <MenuItem onClick={() => getSecttionData("/7/section/C")} icon={<RiStackLine />}>Section C</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label={"Faculty"} icon={<RiTeamLine />}>
            <MenuItem onClick={() => getFacultyData("/0")} icon={<RiStackLine />}>IT</MenuItem>
            <MenuItem onClick={() => getFacultyData("/1")} icon={<RiStackLine />}>CSE</MenuItem>
            <MenuItem onClick={() => getFacultyData("/2")} icon={<RiStackLine />}>ECE</MenuItem>
            <MenuItem onClick={() => getFacultyData("/3")} icon={<RiStackLine />}>Mech</MenuItem>
            <MenuItem onClick={() => getFacultyData("/4")} icon={<RiStackLine />}>Civil</MenuItem>
            <MenuItem onClick={() => getFacultyData("/5")} icon={<RiStackLine />}>EEE</MenuItem>
            <MenuItem onClick={() => getFacultyData("/6")} icon={<RiStackLine />}>CSBS</MenuItem>
            <MenuItem onClick={() => getFacultyData("/7")} icon={<RiStackLine />}>AIML</MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
      </div>
      <div className="container mygrid">
          {studentsData ? <table className="table table-bordered table-striped">
          <thead>
            <p>Total students Present = {selectedStudents.length}</p>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Select</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Roll No.</th>
            </tr>
          </thead>
          <tbody>
            {studentsData?.map((student, index) =>
              <tr key={student?.rollno}>
                <td>{index + 1}</td>
                <td>
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectedStudents.includes(student?.rollno)}
                        onChange={() => handleCheckboxChange(student?.rollno)}
                      />
                    </td>
                <td><img src={`https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${student?.rollno}.jpg`} alt={student?.rollno} className="studentimage"></img></td>
                <td>{student?.name}</td>
                <td>{student?.rollno}</td>
              </tr>
            )}
          </tbody>
          <button className="btn btn-success my-2 m-auto mx-3" onClick={saveAttendance}>Save Attendance</button>
          <button className="btn btn-success my-2 m-auto mx-3" onClick={generatePDF}>Generate PDF</button>
        </table>
       : facultyData ? <table className="table table-bordered table-striped">
       <thead>
         <tr>
           <th scope="col">S.No</th>
           <th scope="col">Name of Faculty</th>
           <th scope="col">Desigantion</th>
           <th scope="col">Profiles</th>
           <th scope="col">Date Of Joining</th>
           <th scope="col">Qualification</th>
           <th scope="col">Nature Of Association</th>
           <th scope="col">Email</th>
           <th scope="col">JNTUH - ID</th>  
         </tr>
       </thead>
       <tbody>
         {facultyData?.teachers?.map((faculty,index) =>
           <tr key={index+1}>
             <th scope="row">{faculty?.sno}</th>
             <td>{faculty?.name}</td>
             <td>{faculty?.designation}</td>
             <td><a href={faculty?.profiles}><FaLinkedin /></a></td>
             <td>{faculty?.doj}</td>
             <td>{faculty?.qualification}</td>
             <td>{faculty?.noa}</td>
             <td>{faculty?.email}</td>
             <td>{faculty?.jntuid}</td>
           </tr>
         )}
       </tbody>
     </table> :<img className="d-block m-auto logo" src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="logo"></img>}
       {console.table(studentsData)}
       {console.table(facultyData)}
       </div>
    </div>
  );
}

export default FacultyData
