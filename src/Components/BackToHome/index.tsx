import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: '1rem',
        position: "relative",
        top: 80,
        left: 10,
        padding: 1,
        margin: 1,
      }}
    >
      <Button onClick={() => navigate("/")} startIcon={<ArrowBackIcon />}>
        Back to Home
      </Button>
    </Box>
  );
};

export default BackToHome;
