import React from 'react'
import {  Outlet } from "react-router-dom";

const Authenticate = () => {
  return (
    <div>Authenticate
        <Outlet />
    </div>
  )
}

export default Authenticate