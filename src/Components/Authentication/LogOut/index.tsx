import React from 'react'
import { Button } from '@mui/material'
import { signOutUser } from '../../../Utils/Firebase'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const handleLogOut = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    signOutUser()
    navigate("/authenticate/signIn")
  }
  return (
    <div>
      <Button onClick={handleLogOut}> Logout </Button> 
    </div>
  )
}

export default Logout