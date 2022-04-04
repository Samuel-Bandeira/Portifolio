import { Box } from "@mui/system";
import React from "react";
import CircleSocialMedia from "./CircleSocialMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "200px",
      }}
    >
      <CircleSocialMedia>
        <GitHubIcon
          sx={{
            fontSize: "34px",
          }}
        />
      </CircleSocialMedia>
      <CircleSocialMedia>
        <InstagramIcon
          sx={{
            fontSize: "34px",
          }}
        />
      </CircleSocialMedia>
      <CircleSocialMedia>
        <YouTubeIcon
          sx={{
            fontSize: "34px",
          }}
        />
      </CircleSocialMedia>
    </Box>
  );
};

export default SocialMedia;
