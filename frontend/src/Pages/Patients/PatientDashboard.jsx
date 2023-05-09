import React, { useState } from "react";
// import CustomTable from "../../Components/TableComponent";
// import profile from "../assets/profile.jpg";
import {
  Stack,
  Typography,
  TextField,
  FormControl,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import DataTable from "../../Components/DynamicTable";
import Heart from "../../assets/heart.png";
import DashboardHeader from "../../Components/DashboardHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const doctorSpecialties = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Hematology",
  "Neurology",
  "Obstetrics and Gynecology",
  "Oncology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Urology",
];

const PatientDashboard = () => {
  const [appointmentInfo, setAppointmentInfo] = useState({
    speciality: "",
    location: "",
  });
  const navigate = useNavigate()
  const handleAppointment = (e) => {
    const { name, value } = e.target;
    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  };

  const handleAppointmentBooking = async (e) => {
    e.preventDefault();
    navigate('/search', {state: appointmentInfo})
  };

  return (
    <Stack direction="column" className="w-full p-4 flex-1 ml-56  ">
      <DashboardHeader />
      <Stack direction="row">
        {/* New Appointment  */}
        <Stack direction="column" width="70%">
          <Box className="bg-white p-3 my-4 rounded">
            <Typography variant="h6" color="initial">
              New Appointment
            </Typography>
            <form action="" onSubmit={handleAppointmentBooking} method="post">
              <Stack direction="row" gap={1}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Speciality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="speciality"
                    value={appointmentInfo.speciality}
                    label="Age"
                    onChange={handleAppointment}
                  >
                    {doctorSpecialties.map((ele, idx) => (
                      <MenuItem key={idx} value={ele}>
                        {ele}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    name="location"
                    id="location"
                    label="Location"
                    value={appointmentInfo.location}
                    onChange={handleAppointment}
                    type="text"
                    fullWidth
                  />
                </FormControl>
                <Button
                  variant="contained"
                  type="submit"
                  className="self-center p-1 w-1/2 h-12"
                >
                  See Doctors
                </Button>
              </Stack>
            </form>
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

        <Stack direction="column" width="30%" margin="0 1rem">
          <Box
            sx={{
              backgroundColor: "white",
              padding: ".5rem",
              margin: "1rem 0",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h5" color="initial" padding={1}>
              Find Specialist
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Choose your category
            </Typography>
            <List>
              <ListItem>
                <ListItemButton>
                  <Stack direction="row" alignItems="center">
                    <img
                      src={Heart}
                      alt="heart"
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: " 0 1rem 0 0",
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        color="red"
                        lineHeight={1.2}
                      >
                        Cardiology
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        lineHeight={1.2}
                      >
                        Dr. Suresh Chandra
                      </Typography>
                      <Typography variant="caption" color="initial">
                        02/08/22, 10:00 - 10:30
                      </Typography>
                    </div>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Stack direction="row" alignItems="center">
                    <img
                      src={Heart}
                      alt="heart"
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: " 0 1rem 0 0",
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        color="red"
                        lineHeight={1.2}
                      >
                        Cardiology
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        lineHeight={1.2}
                      >
                        Dr. Suresh Chandra
                      </Typography>
                      <Typography variant="caption" color="initial">
                        02/08/22, 10:00 - 10:30
                      </Typography>
                    </div>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Stack direction="row" alignItems="center">
                    <img
                      src={Heart}
                      alt="heart"
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: " 0 1rem 0 0",
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        color="red"
                        lineHeight={1.2}
                      >
                        Cardiology
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        lineHeight={1.2}
                      >
                        Dr. Suresh Chandra
                      </Typography>
                      <Typography variant="caption" color="initial">
                        02/08/22, 10:00 - 10:30
                      </Typography>
                    </div>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Stack direction="row" alignItems="center">
                    <img
                      src={Heart}
                      alt="heart"
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: " 0 1rem 0 0",
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        color="red"
                        lineHeight={1.2}
                      >
                        Cardiology
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        lineHeight={1.2}
                      >
                        Dr. Suresh Chandra
                      </Typography>
                      <Typography variant="caption" color="initial">
                        02/08/22, 10:00 - 10:30
                      </Typography>
                    </div>
                  </Stack>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PatientDashboard;
