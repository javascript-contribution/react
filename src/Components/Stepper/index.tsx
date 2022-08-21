import React from 'react'
import {  Outlet } from "react-router-dom";

const Stepper = () => {
  return (
    <div>Stepper
        <Outlet />
    </div>
  )
}

export default Stepper