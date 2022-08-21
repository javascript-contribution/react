import React from 'react'
import {  Outlet } from "react-router-dom";

const StateManagement = () => {
  return (
    <div>StateManagement
        <Outlet />
    </div>
  )
}

export default StateManagement