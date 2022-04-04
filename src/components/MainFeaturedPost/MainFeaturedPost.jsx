import React from "react";
import { Box } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const MainFeaturedPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <LeftSide />
      <RightSide />
    </Box>
  );
};

export default MainFeaturedPost;
