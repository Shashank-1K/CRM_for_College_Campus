import "./StudentsData.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiFolder2Line,
  RiStackLine,
} from "react-icons/ri";
import { onValue, ref } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { realtimedb } from '../../firebaseconfig'
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
function StudentsData() {
  let [studentsData, setStudentsData] = useState()
  const navigate = useNavigate()
  const getSecttionData = (section) => {
    const reference = ref(realtimedb, "students/departments/" + section)
    onValue(reference, (snapshot) => {
      setStudentsData(snapshot.val())
    })
  }
  return (
    <div>
      <div>
        <Sidebar style={{ height: "100%", position:"absolute"}}>
        <main>
          <Menu>
              <MenuItem>
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
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
            <MenuItem onClick={() => navigate("/profile")} icon={<RiHome4Line />}>Profile</MenuItem>
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
          </Menu>
        </main>
      </Sidebar>
      </div>
      <div className="container mygrid" style={{display: 'grid', gridTemplateColumns: '20vw auto'}}>
          <div></div>
          {studentsData ? <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Roll No.</th>
            </tr>
          </thead>
          <tbody>
            {studentsData?.map((student, index) =>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student?.name}</td>
                <td>{student?.rollno}</td>
              </tr>
            )}
          </tbody>
        </table>
       : <img className="d-block m-auto my-5" src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="logo"></img>}
       </div>
    </div>
  );
}

export default StudentsData
