import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Avatar, createTheme, Menu, MenuItem, Stack, Box } from "@mui/material";
import profileImg from "../assets/profile.jpg";
import { ThemeProvider } from "@emotion/react";
import { GlobalContext } from "../context/GlobalState";


// import { logout, login } from "../redux/actions/authAction";

const HeaderComponent = () => {



  const { isLoggedIn, logoutUser }  = useContext(GlobalContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate()

  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2EC5BC",
        light: "#2EC5BC",
        dark: "#2EC5BC",
      },
    },
  });

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logoutUser()
    sessionStorage.clear();
  };

  const MenuItemList = (items) => {
    return items.map((item, idx) => {
      return (
        <Button
          key={idx}
          variant="text"
          onClick={()=>navigate(item.url)}
          sx={{ color: "black", margin: "0 .5rem" }}
        >
          {item.name}
        </Button>
      );
    });
  };

  const ifLoginTrue = () => {
    return (
      <>
        <Avatar
          id="avatar-button"
          alt="Profile Image"
          src={profileImg}
          sx={{ marginLeft: "2rem" }}
          onClick={handleAvatarClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleAvatarClose}
          MenuListProps={{
            "aria-labelledby": "avatar-button",
          }}
        >
          <Link to="/profile">
            <MenuItem onClick={handleAvatarClose}> Profile</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}> Logout</MenuItem>
        </Menu>
      </>
    );
  };

  const ifLoginFalse = () => {
    return (
      <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row" sx={{ marginLeft: "2rem" }}>
          <Button
            variant="contained"
            sx={{ color: "white" }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ border: "2px solid" }}
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </Stack>
      </ThemeProvider>
    );
  };

  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{ mr: 0, backgroundColor: "transparent", px: 5, py: 0.5 }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Link to="/">
          <Box component="img" src={logo} alt="Logo" sx={{ width: "50px" }} />
        </Link>
        <Toolbar sx={{ color: "black" }}>
          {MenuItemList([
            {name:"Home", url:'/'},
            {name:"Dashboard", url:'/dashboard'},
            {name:"About Us", url:'/about'},
            {name:"Contact ", url:'/contact'},

          ])}
          {isLoggedIn === true ? ifLoginTrue() : ifLoginFalse()}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
