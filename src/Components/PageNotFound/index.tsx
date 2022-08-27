import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('/')}>
      <img width="800" height="500" src={'https://cdn.dribbble.com/users/2966870/screenshots/15867155/media/2c800149bcce2d59ec27dc754c7044f9.jpg?compress=1&resize=1600x1200&vertical=top'} alt={'Lost somewhere?'}></img>
       </Button>
    </div>
  )
}

export default NotFound