import React from 'react'
import {  Outlet } from "react-router-dom";

const ChatBox = () => {
  return (
    <div>ChatBox
        <Outlet />
    </div>
  )
}

export default ChatBox