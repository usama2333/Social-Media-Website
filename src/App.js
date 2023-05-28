import { Box, Container, Stack } from "@mui/material";
import Feed from "./component/feed/Feed";
import Navbar from "./component/navbar/Navbar";
import RightBar from "./component/rightbar/RightBar";
import SideBar from "./component/sidebar/SideBar";
import logo from "./logo.svg";
import { Fragment, useState } from "react";
import Home from "./component/home/Home";
import Add from "./component/add/Add";
import { ThemeProvider, createTheme } from "@mui/material";

// import './App.css';

function App() {
  const [mode , setMode] = useState('light');
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xlg: 1500,
        xl: 1920,
        custom: 2000,
      },
    },

    palette: {
      mode: mode,
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar />
          <Home mode={mode} setMode={setMode}/>
          <Add />
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
