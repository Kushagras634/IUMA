import React, { useState } from "react";
import CustomTable from "../Components/TableComponent";
import profile from "../assets/profile.jpg";
import {
  Card,
  Stack,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import CardComponent from "../Components/CardComponent";
import Prescription from "../Components/PrescriptionComponent";
import PatientForm from "../Components/PatientDetails";

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
    <Box sx={{ margin: "0 2rem" }}>
      <Stack direction="row" marginTop="2rem">
        <Box maxWidth="md">
          <Prescription
            patientDetails={patientDetails}
            doctorDetails={doctorDetails}
            medicines={medicines}
          />
        </Box>
        <Box maxWidth="md">
          <PatientForm />
        </Box>
      </Stack>
      <Stack direction="row" margin="10rem 0">
        {Array(8)
          .fill(0)
          .map((ele, idx) => {
            return (
              <CardComponent
                key={idx}
                title="Doctor"
                img=""
                cardWidth="350px"
                imgWidth="200px"
                imgHeight="200px"
                link=""
                margin="2rem .5rem"
              />
            );
          })}
      </Stack>
      <Stack direction="row">
        <CustomTable
          column={medical_data.column}
          rows={medical_data.rows}
          title="Recent Appointments"
        />
        <CustomTable
          column={medical_data.column}
          rows={medical_data.rows}
          title="Bill Amount"
        />
      </Stack>
    </Box>
  );
};

export default Dashboard;
