import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Icon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
// import Notifications from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import profile1 from "../../assests/images/profile1.png";
import profile5 from "../../assests/images/profile5.png";
import profile11 from '../../assests/images/profile11.jpg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (error) => toast('Logout Successfully');

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
  //   backgroundColor: "white",
}));

const Navbar = () => {
    const [open , setOpen] = useState(false);
    const [check , setCheck] = useState(true);
    const [name , setName] = useState('Usama Ahmed')

    const logoutHandler = () => {
        notify();
        setCheck(false);
        setName('Anonymous')
    }
  return (
    <Fragment>
    
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {name}
          </Typography>

          <AccessibilityNewIcon
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          ></AccessibilityNewIcon>

          {/* search bar here */}
          <Search>
            <InputBase placeholder="Search..."></InputBase>
          </Search>

          {/* icons here */}
          <Icons
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar onClick={preState=>setOpen(true)} sx={{ width: 30, height: 30 }} src={check === true ? profile11 : <AccountCircleIcon/>} />
          </Icons>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar onClick={e=>setOpen(true)} sx={{ width: 30, height: 30 }} src={check === true ? profile11 : <AccountCircleIcon/>} />
            <Typography variant="span">Usama Ahmed</Typography>
          </Box>
        </Toolbar>

        {/* Open and close menu start */}
        <Box>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(preState) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem onClick={logoutHandler} >Logout</MenuItem>
          </Menu>
        </Box>
        {/* open and close menu end */}
      </AppBar>
      <ToastContainer/>
     
    </Fragment>
  );
};

export default Navbar;
