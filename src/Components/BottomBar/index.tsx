import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import CopyRights from "./Fragments/CopyRights";

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
        <CopyRights sx={{ mt: 5 }} />
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
