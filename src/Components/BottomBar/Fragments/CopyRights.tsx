import React from 'react'
import { Link, Typography } from '@mui/material';

const CopyRights = (props: any) => {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://react-js-template.netlify.app/">
        React.js Template
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <Link color="inherit" href="https://react-js-template.netlify.app/">
        MIT LICENSE
      </Link>
    </Typography>
  );
}

export default CopyRights

  