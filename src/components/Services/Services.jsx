import React from "react";
import { Box, Typography } from "@mui/material";
const Services = () => {
  const openLib =
    "https://edshelf.com/wp-content/uploads/1375044550929screenshot-openlibrary-1.jpg";

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          My Projects
        </Typography>
        <Box sx={{ borderBottom: "1px solid white", width: "400px" }}>
          <Typography variant="h6" textAlign="center">
            A selection of my best projects!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        {[0, 1, 2].map((el) => (
          <Box>
            <Box
              sx={{
                width: "500px",
                height: "400px",
                backgroundImage: `url(${openLib})`,
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  borderRadius: "20px",
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    opacity: 1,
                    background: "rgba(0,0,0,0.5)",
                  },
                }}
              >
                Hello
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
