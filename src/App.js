import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import MainFeaturedPost from "./components/MainFeaturedPost/MainFeaturedPost";
import { Box, CssBaseline, Container } from "@mui/material";
import Services from "./components/Services/Services";

const theme = createTheme((theme) => ({
  typography: {
    fontFamily: ["Hubballi"],
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: "#262625",
          height: "100%",
        }}
      >
        <Box sx={{ height: "80px" }} />
        <Container
          disableGutters={true}
          maxWidth="xl"
          sx={{
            color: "white",
            height: "100%",
          }}
        >
          <Navbar />
          <MainFeaturedPost />
          <Services />
        </Container>
      </Box>

      {/* <Navbar /> */}
      {/* <MainFeaturedPost /> */}
    </ThemeProvider>
  );
}

export default App;
