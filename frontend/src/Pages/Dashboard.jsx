import React, { useState } from "react";
import CustomTable from "../Components/TableComponent";
import profile from "../assets/profile.jpg";
import {
  Stack,
  Typography,
  Avatar,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  List, ListItem, ListItemButton
} from "@mui/material";

import profileImg from "../assets/profile.jpg";

import DownloadIcon from "@mui/icons-material/Download";
import DashboardSidepanel from "../Components/DashboardSidepanel";
import DataTable from "../Components/DynamicTable";
import Heart from '../assets/heart.png'

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
    <Stack direction="row" sx={{ backgroundColor: "#e3e1e1" }}>
      {/* Sidepanel */}
      <DashboardSidepanel
        values={[
          "Dashboard",
          "Profile",
          "Prescription",
          "Refferals",
          "Appointments",
          "Charts",
        ]}
      />
      {/* Main Dashboard */}
      <Stack direction="column" sx={{ width: "90%", padding: "1rem" }}>
        {/* Dashboard Header */}
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
        <Stack direction="row">
          {/* New Appointment  */}
          <Stack direction="column" width="65%">
            <Box
              sx={{
                backgroundColor: "white",
                padding: ".5rem",
                margin: "1rem 0",
                borderRadius: "5px",
              }}
            >
              <Typography variant="h6" color="initial" padding={2}>
                New Appointment
              </Typography>
              <Stack direction="row">
                <FormControl sx={{ margin: "0 .5rem", width: "100%" }}>
                  <TextField
                    name="Speciality"
                    id="speciality"
                    label="Speciality"
                    type="text"
                    fullWidth
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl sx={{ margin: "0 .5rem", width: "100%" }}>
                  <TextField
                    name="Location"
                    id="location"
                    label="Location"
                    type="text"
                    fullWidth
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 .5rem",
                    padding: "0",
                    width: "50%",
                    height: "54px",
                  }}
                >
                  See Doctors
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                padding: ".5rem",
                margin: "1rem 0",
                borderRadius: "5px",
              }}
            >
              <Typography variant="h6" color="initial" padding={2}>
                Ongoing Treatments
              </Typography>
              <DataTable
                data={[
                  {
                    medicine: "UltraVit OMEGA + DHA",
                    amount: "1/ x2",
                    time: "Before Eating",
                    duration: "2 months",
                  },
                ]}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                padding: ".5rem",
                margin: "1rem 0",
                borderRadius: "5px",
              }}
            >
              <Typography variant="h6" color="initial" padding={2}>
                Test Results
              </Typography>
              <DataTable
                data={[
                  {
                    type: "Glucose Blood Test",
                    result: "Pending",
                    date: "27/08/2022",
                    Download: <DownloadIcon />,
                  },
                  {
                    type: "Electrocardiogram",
                    result: "Require Attention",
                    date: "27/08/2022",
                    Download: <DownloadIcon />,
                  },
                ]}
              />
            </Box>
          </Stack>

          <Stack direction="column" width="30%" margin='0 1rem'>
            <Box
              sx={{
                backgroundColor: "white",
                padding: ".5rem",
                margin: "1rem 0",
                borderRadius: "5px",
              }}
            >
              <Typography variant="h5" color="initial" padding={1}>Find Specialist</Typography>
              <Typography variant="subtitle1" color="initial">Choose your category</Typography>
              <List>
                <ListItem>
                  <ListItemButton>
                    <Stack direction='row' alignItems='center'>
                      <img src={Heart} alt="heart" style={{width:'50px', height:'50px', padding:' 0 1rem 0 0'}}/>
                      <div>
                        <Typography variant="subtitle1" color="red" lineHeight={1.2} >Cardiology</Typography>
                        <Typography variant="subtitle1" color="initial" lineHeight={1.2} >Dr. Suresh Chandra</Typography>
                        <Typography variant="caption" color="initial">02/08/22, 10:00 - 10:30</Typography>
                      </div>
                    </Stack>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Stack direction='row' alignItems='center'>
                      <img src={Heart} alt="heart" style={{width:'50px', height:'50px', padding:' 0 1rem 0 0'}}/>
                      <div>
                        <Typography variant="subtitle1" color="red" lineHeight={1.2} >Cardiology</Typography>
                        <Typography variant="subtitle1" color="initial" lineHeight={1.2} >Dr. Suresh Chandra</Typography>
                        <Typography variant="caption" color="initial">02/08/22, 10:00 - 10:30</Typography>
                      </div>
                    </Stack>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Stack direction='row' alignItems='center'>
                      <img src={Heart} alt="heart" style={{width:'50px', height:'50px', padding:' 0 1rem 0 0'}}/>
                      <div>
                        <Typography variant="subtitle1" color="red" lineHeight={1.2} >Cardiology</Typography>
                        <Typography variant="subtitle1" color="initial" lineHeight={1.2} >Dr. Suresh Chandra</Typography>
                        <Typography variant="caption" color="initial">02/08/22, 10:00 - 10:30</Typography>
                      </div>
                    </Stack>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Stack direction='row' alignItems='center'>
                      <img src={Heart} alt="heart" style={{width:'50px', height:'50px', padding:' 0 1rem 0 0'}}/>
                      <div>
                        <Typography variant="subtitle1" color="red" lineHeight={1.2} >Cardiology</Typography>
                        <Typography variant="subtitle1" color="initial" lineHeight={1.2} >Dr. Suresh Chandra</Typography>
                        <Typography variant="caption" color="initial">02/08/22, 10:00 - 10:30</Typography>
                      </div>
                    </Stack>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
