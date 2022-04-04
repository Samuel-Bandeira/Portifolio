import React from "react";
import { Box } from "@mui/material";
const CircleSocialMedia = ({ children }) => {
  return (
    <Box
      sx={{
        border: "4px solid white",
        borderRadius: "50%",
        width: "55px",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default CircleSocialMedia;
