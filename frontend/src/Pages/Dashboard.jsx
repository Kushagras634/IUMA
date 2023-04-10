import React, { useState } from "react";
import CustomTable from "../Components/TableComponent";
import profile from "../assets/profile.jpg";
import {
  Card,
  Stack,
  Toolbar,
  Typography,
  CardContent,
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  CardHeader,
  Avatar,
  IconButton,
  CardActionArea,
  Paper,
  CardMedia,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CardComponent from "../Components/CardComponent";
import Prescription from "../Components/PrescriptionComponent";
import PatientForm from "../Components/PatientDetails";
import doctorNearfrom from "../assets/Asset 2.png";

import CalenderComponent from "../Components/CalendarComponent";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

const Dashboard = () => {
  const medical_data = {
    column: ["Name", "Prescription", "Report", "Bill_Amount"],
    rows: [
      ["Dr Juneja", "www.google.com", "www.google.com", "₹ 500"],
      ["Dr Juneja", "www.google.com", "www.google.com", "₹ 500"],
      ["Dr Juneja", "www.google.com", "www.google.com", "₹ 500"],
      ["Dr Juneja", "www.google.com", "www.google.com", "₹ 500"],
      ["Dr Juneja", "www.google.com", "www.google.com", "₹ 500"],
    ],
  };

  const patientDetails = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, New York, NY 10001",
  };

  const doctorDetails = {
    name: "Jane Doe",
    registrationNumber: "NY123456",
  };

  const medicines = [
    {
      name: "Aspirin",
      dosage: "1 Morning, 1 Night (Before Food)",
      duration: "10 days",
    },
    {
      name: "Aspirin",
      dosage: "1 Morning, 1 Night (Before Food)",
      duration: "10 days",
    },
    {
      name: "Aspirin",
      dosage: "1 Morning, 1 Night (Before Food)",
      duration: "10 days",
    },
    {
      name: "Aspirin",
      dosage: "1 Morning, 1 Night (Before Food)",
      duration: "10 days",
    },
  ];

  const patientOptions = [
    {
      title: "Doctors Appointment",
      rediredt: "",
    },
    {
      title: "Get your Test's done  ",
      rediredt: "",
    },
    {
      title: "Buy your Medicines",
      rediredt: "",
    },
    {
      title: "Book ",
      rediredt: "",
    },
  ];

  return (
    <Stack direction="row">
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
        }}
      >
        {[
          "Dashboard",
          "Profile",
          "Prescription",
          "Refferals",
          "Appointments",
          "Charts",
        ].map((text, index) => (
          <ListItem key={index} sx={{ margin: "0rem .2rem" }}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack direction="column" sx={{ width: "90%", padding: "1rem" }}>
        <Typography variant="h4" color="initial">
          Dashboard
        </Typography>
        <Stack direction="row" sx={{ padding: "1rem 0" }}>
          <Stack sx={{ width: "50%" }}>
            <Stack direction="row">
              <Card
                variant="oulined"
                sx={{
                  margin: "1rem .5rem",
                  borderRadius: "10px",
                  width: "50%",
                }}
              >
                <CardActionArea
                  sx={{
                    background:
                      "linear-gradient(27deg, rgba(9,21,121,1) 23%, rgba(116,5,128,1) 71%, rgba(255,0,138,1) 100%)",
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton aria-label="">
                        <AddCircleOutlineOutlinedIcon
                          sx={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "50%",
                            fontSize: "2rem",
                          }}
                        />
                      </IconButton>
                    }
                    title=""
                    subheader=""
                  />
                  <CardContent>
                    <Typography variant="button" color="white">
                      Make a clinic Appointment
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                variant="oulined"
                sx={{
                  margin: "1rem .5rem",
                  borderRadius: "10px",
                  width: "50%",
                }}
              >
                <CardActionArea
                  sx={{
                    backgroundColor: "#f3d7ff",
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton aria-label="">
                        <CottageOutlinedIcon
                          sx={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "50%",
                            fontSize: "2rem",
                          }}
                        />
                      </IconButton>
                    }
                    title=""
                    subheader=""
                  />
                  <CardContent>
                    <Typography variant="button" color="black">
                      Request A Home Visit
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
            <Stack direction="row">
              <CalenderComponent />
              <Card sx={{ margin: "1rem .5rem", width: "50%" }}>
                <CardContent>
                  <Typography variant="subtitle1" color="initial">
                    Recent Appointments
                  </Typography>
                  <List>
                    <ListItem>Hello</ListItem>
                  </List>
                </CardContent>
              </Card>
            </Stack>
            <Card sx={{ display: "flex", height: '170px', marginTop: '.5rem' }}>
              <CardContent>
                <Typography>Find Doctors near you</Typography>
              </CardContent>
              <CardMedia
                title="doctor near you"
                image={doctorNearfrom}
                component="img"
                sx={{ width: "100%", height: "100px", objectFit: 'contain' }}
              />
            </Card>
          </Stack>
          <Stack sx={{ width: "50%" }}></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
