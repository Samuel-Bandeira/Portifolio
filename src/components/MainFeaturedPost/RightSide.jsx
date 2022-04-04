import React from "react";
import { Box } from "@mui/material";
import personImage from "../../images/personImg.png";

const RightSide = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "700px",
          height: "700px",
          background: "linear-gradient( -45deg, #1976d2, #262625 51% )",
          borderRadius: "50%",
          zIndex: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${personImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default RightSide;
