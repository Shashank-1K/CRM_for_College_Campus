import React from 'react'
import { Outlet } from 'react-router-dom'
import UserState from '../contexts/UserState'
function Root() {
  return (
    <div>
        <UserState><Outlet/></UserState>
    </div>
  )
}

export default Root