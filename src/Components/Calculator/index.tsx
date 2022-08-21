import React from 'react'
import {  Outlet } from "react-router-dom";

const Calculator = () => {
  return (
    <div>Calculator
        <Outlet />
    </div>
  )
}

export default Calculator