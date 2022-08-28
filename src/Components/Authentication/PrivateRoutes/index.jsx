import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../../Utils/Auth"

export default function PrivateRoutes() {
  const loggedInUser = useAuth()
  return (

    loggedInUser === null ? <Navigate to={"/authenticate/sign-in-with-firebase"} /> : <Outlet />
  )
}