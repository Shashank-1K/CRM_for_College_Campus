import React, { useState } from 'react'
import UserContext from './UserContext'
function UserState(props) {
  let [currentUser,setCurrentUser] = useState()
  return (
    <UserContext.Provider value={{user:[currentUser,setCurrentUser]}}>
        {props.children}
    </UserContext.Provider>
  )
}
export default UserState