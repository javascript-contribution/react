import React from 'react'
import ErrorBoundary from '../Utils/ErrorBoundary/Custom'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const details = {
    name: 'Clinto',
    phone: 1234456
}
const Person = (props: { contact: any; }) => {
    const { contact } = props;
    return <> <h1> {contact.name} </h1>  </>
}

const TestUI = () => {
    // const today = new Date();
    // const dd = String(today.getDate()).padStart(2, "0");
    // const mm = String(today.getMonth() + 1).padStart(2, "0");
    // const yyyy = today.getFullYear();
    // const todayDate = dd + "/" + mm + "/" + yyyy;
  return (  <>
    {/* <ErrorBoundary component={'test'}>  */}
  
      <Person contact={details} />
  
    
    {/* </ErrorBoundary> */}
    {/* <ErrorBoundary component={'kk'}>  */}
    {/* <> {Error('hi')}</> */}
    {/* </ErrorBoundary> */}
    </>
  )
}

export default TestUI

