import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import DashboardSidepanel from "../Components/DashboardSidepanel";
import PatientDashboard from "./PatientDashboard";
import { Stack } from "@mui/material";
import PatientProfile from "./PatientProfile";
import PatientPrescription from "./PatientPrescription";
import PatientAppointments from "./PatientAppointments";
import PatientCharts from "./PatientCharts";
const DashboardRouter = () => {
  return (
      <Stack direction="row" className="bg-lightGrey">
        <DashboardSidepanel
          values={[
            {name: "Dashboard", url: '/dashboard/'},
            {name: "Profile", url:'/dashboard/profile'},
            {name: "Prescription", url:'/dashboard/prescription'},
            {name:"Appointments", url:'/dashboard/appointments'},
            {name:"Search Doctor", url:'/search'}
          ]}
        />
        <Routes>
          <Route exact path="/" element={<PatientDashboard />} />
          <Route  path="/profile" element={<PatientProfile/>} />
          <Route  path="/prescription" element={< PatientPrescription/>} />
          <Route  path="/appointments" element={<PatientAppointments/>} />
          <Route  path="/charts" element={<PatientCharts/>} />

        </Routes>
      </Stack>
  );
};

export default DashboardRouter;
