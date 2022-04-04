import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SocialMedia from "./SocialMedia";
const LeftSide = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "310px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6">
            {"Speed Up Comunications".toUpperCase()}
          </Typography>
        </Box>

        <Box sx={{ width: "80%", zIndex: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Hi I am Samuel Bandeira
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography variant="h5">
            A Full-Stack Web Developer located in Brazil
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            borderRadius: "30px",
            alignSelf: "flex-start",
          }}
        >
          <Typography
            sx={{
              m: "4px 25px 4px 25px",
            }}
          >
            Hire Me
          </Typography>
        </Button>

        <Box
          sx={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#1976d2",
            position: "absolute",
            zIndex: 1,
            top: "60px",
            left: "280px",
          }}
        />
      </Box>
      <Box sx={{ mt: "100px" }}>
        <SocialMedia />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <ArrowDownwardIcon />
      </Box>
    </Box>
  );
};

export default LeftSide;
