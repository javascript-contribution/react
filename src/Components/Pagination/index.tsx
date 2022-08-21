import React from 'react'
import {  Outlet } from "react-router-dom";

const Pagination = () => {
  return (
    <div>Pagination
        <Outlet />
    </div>
  )
}

export default Pagination