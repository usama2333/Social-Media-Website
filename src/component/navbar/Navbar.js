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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile1 from "../../assests/images/profile1.png";
import profile5 from "../../assests/images/profile5.png";
import profile11 from "../../assests/images/profile11.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (error) => toast("Logout Successfully");

const Icons = styled("div")(({ theme }) => ({
  //   backgroundColor: "white",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(true);
  const [name, setName] = useState("Usama Ahmed");

  const logoutHandler = () => {
    notify();
    setCheck(false);
    setName("Anonymous");
  };
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
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
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
            <Avatar
              onClick={(preState) => setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src={check === true ? profile11 : <AccountCircleIcon />}
            />
          </Icons>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src={check === true ? profile11 : <AccountCircleIcon />}
            />
            <Typography variant="span"> {name}</Typography>
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
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </Box>
        {/* open and close menu end */}
      </AppBar>
      <ToastContainer />
    </Fragment>
  );
};

export default Navbar;
