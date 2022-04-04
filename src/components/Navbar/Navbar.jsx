import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0)",
        // border: "1px solid red",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: "flex",
              width: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {["Home", "About", "Portifolio", "Pricing"].map((el, index) => (
              <Button
                sx={{
                  textTransform: "none",
                  color: "white",
                }}
              >
                <Typography
                  key={index}
                  sx={{
                    fontSize: "1.1rem",
                  }}
                >
                  {el}
                </Typography>
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              textTransform: "none",
              border: "3px solid white",
              borderRadius: "20px",
              color: "white",
              "& :hover": {
                color: "white",
              },
            }}
          >
            <Typography
              sx={{
                ml: "10px",
                mr: "10px",
                fontSize: "1.05rem",
              }}
            >
              Contact Us
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
