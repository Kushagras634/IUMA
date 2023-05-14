import React, { useContext, useEffect } from 'react'
import profileImg from "../assets/profile.jpg";
import {
    Stack,
    Typography,
    Avatar,

  } from "@mui/material";
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardHeader = () => {

  const {name, isLoggedIn} = useContext(GlobalContext)
  const navigate = useNavigate()
  useEffect(()=>{
    // console.log(name)
    if(!isLoggedIn){
      navigate('/login')
      toast("First Login", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#F84F31",
          color: 'white',
        },
      });
    }
  },[])

  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    sx={{
      backgroundColor: "white",
      padding: ".5rem",
      borderRadius: "5px",
    }}
  >
    <Typography variant="h4" color="initial">
      Hello, {name}
    </Typography>
    <Stack direction="column">
      <Avatar
        id="avatar-button"
        alt="Profile Image"
        src={profileImg}
        sx={{ marginLeft: "2rem" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
    </Stack>
  </Stack>
  )
}

export default DashboardHeader