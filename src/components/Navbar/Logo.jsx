import React from "react";
import { Box, Typography } from "@mui/material";
const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "bold",
          mr: "8px",
        }}
      >
        SM
      </Typography>
      <Typography
        sx={{
          fontSize: "30px",
        }}
      >
        Studio
      </Typography>
    </Box>
  );
};

export default Logo;
