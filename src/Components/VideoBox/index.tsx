import React from 'react'
import {  Outlet } from "react-router-dom";

const VideoBox = () => {
  return (
    <div>VideoBox
        <Outlet />
    </div>
  )
}

export default VideoBox