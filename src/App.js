
import { Stack } from "@mui/material";
import Feed from "./component/feed/Feed";
import Navbar from "./component/navbar/Navbar";
import RightBar from "./component/rightbar/RightBar";
import SideBar from "./component/sidebar/SideBar";
import logo from "./logo.svg";
import { Fragment } from "react";


// import './App.css';

function App() {
  

  return (
    <Fragment>

    <Navbar/>

    <Stack direction='row' spacing={2}>
    <SideBar/>
    <Feed/>
    <RightBar/>
    </Stack>
    
      
    </Fragment>
  );
}

export default App;
