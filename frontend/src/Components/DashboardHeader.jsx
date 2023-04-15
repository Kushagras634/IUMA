import React from 'react'
import profileImg from "../assets/profile.jpg";
import {
    Stack,
    Typography,
    Avatar,
    TextField,
    FormControl,
    FormHelperText,
    Button,
    Box,
    List,
    ListItem,
    ListItemButton,
  } from "@mui/material";

const DashboardHeader = () => {
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
      Hello, Jeevesh
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