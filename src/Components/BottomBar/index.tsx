import React from "react";
import { BottomNavigation, BottomNavigationAction, Link, Paper, Typography } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

function Copyright(props: any) {
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


export default function BottomBar() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        height: "5rem",
        textColor: "white"
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        // value={value}
        onChange={(event, newValue) => {
          return null;
        }}
        style={{ backgroundColor: "black" }}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          style={{ color: "white" }}
        />
        <Copyright sx={{ mt: 5 }} />
        <BottomNavigationAction
          label="Notification"
          icon={<FavoriteIcon />}
          style={{ color: "white" }}
        />
         
        <BottomNavigationAction
          label="Archive"
          icon={<ArchiveIcon />}
          style={{ color: "white" }}
        />
       
      </BottomNavigation>

      
    </Paper>
  );
}
