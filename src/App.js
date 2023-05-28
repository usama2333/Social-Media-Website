
import { Container, Stack } from "@mui/material";
import Feed from "./component/feed/Feed";
import Navbar from "./component/navbar/Navbar";
import RightBar from "./component/rightbar/RightBar";
import SideBar from "./component/sidebar/SideBar";
import logo from "./logo.svg";
import { Fragment } from "react";
import Home from "./component/home/Home";
import Add from "./component/add/Add";


// import './App.css';

function App() {
  

  return (
    <Fragment>

    <Navbar/>
    <Home/>
    <Add/>
  
      
    </Fragment>
  );
}

export default App;
