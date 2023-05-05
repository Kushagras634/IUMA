import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardSidepanel from "../Components/DashboardSidepanel";
import PatientDashboard from "./Patients/PatientDashboard";
import { Stack } from "@mui/material";
import PatientProfile from "./Patients/PatientProfile";
import PatientPrescription from "./Patients/PatientPrescription";
import PatientAppointments from "./Patients/PatientAppointments";
import PatientCharts from "./Patients/PatientCharts";
import { GlobalContext } from "../context/GlobalState";
import DoctorDashboard from "./Doctors/DoctorDashboard";
import DoctorProfile from "./Doctors/DoctorProfile";
import DoctorPrescription from "./Doctors/DoctorPrescription";
import DoctorAppointment from "./Doctors/DoctorAppointment";
import DoctorHistory from "./Doctors/DoctorHistory";
import DashboardHeader from "../Components/DashboardHeader";
const DashboardRouter = () => {
  const { profession } = useContext(GlobalContext);
  const navigate = useNavigate();

  switch (profession) {
    case "patient":
      return (
        <Stack direction="row" className="bg-lightGrey">
          <DashboardSidepanel
            values={[
              { name: "Dashboard", url: "/dashboard/" },
              { name: "Profile", url: "/dashboard/profile" },
              { name: "Prescription", url: "/dashboard/prescription" },
              { name: "Appointments", url: "/dashboard/appointments" },
              { name: "Search Doctor", url: "/search" },
            ]}
          />
          <Routes>
            <Route exact path="/" element={<PatientDashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/prescription" element={<PatientPrescription />} />
            <Route path="/appointments" element={<PatientAppointments />} />
            <Route path="/charts" element={<PatientCharts />} />
          </Routes>
        </Stack>
      );
    case "doctor":
      return (
        <Stack direction="row" className="bg-lightGrey">
          <DashboardSidepanel
            values={[
              { name: "Dashboard", url: "/dashboard/" },
              { name: "Profile", url: "/dashboard/profile" },
              { name: "Prescriptions", url: "/dashboard/prescription" },
              { name: "Appointments", url: "/dashboard/appointments" },
              { name: "History", url: "/dashboard/history" },
            ]}
          />
          <Stack direction="column" className="w-full p-4 flex-1 ml-56  ">
            <DashboardHeader />
            <Routes>
              <Route exact path="/" element={<DoctorDashboard />} />
              <Route path="/profile" element={<DoctorProfile />} />
              <Route path="/prescription" element={<DoctorPrescription />} />
              <Route path="/appointments" element={<DoctorAppointment />} />
              <Route path="/history" element={<DoctorHistory />} />
            </Routes>
          </Stack>
        </Stack>
      );
    case "hospital":
      return (
        <Stack direction="row" className="bg-lightGrey">
          <DashboardSidepanel
            values={[
              { name: "Dashboard", url: "/dashboard/" },
              { name: "Profile", url: "/dashboard/profile" },
              { name: "Prescription", url: "/dashboard/prescription" },
              { name: "Appointments", url: "/dashboard/appointments" },
              { name: "Search Doctor", url: "/search" },
            ]}
          />
          <Routes>
            <Route exact path="/" element={<PatientDashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/prescription" element={<PatientPrescription />} />
            <Route path="/appointments" element={<PatientAppointments />} />
            <Route path="/charts" element={<PatientCharts />} />
          </Routes>
        </Stack>
      );
    case "laboratory":
      return (
        <Stack direction="row" className="bg-lightGrey">
          <DashboardSidepanel
            values={[
              { name: "Dashboard", url: "/dashboard/" },
              { name: "Profile", url: "/dashboard/profile" },
              { name: "Prescription", url: "/dashboard/prescription" },
              { name: "Appointments", url: "/dashboard/appointments" },
              { name: "Search Doctor", url: "/search" },
            ]}
          />
          <Routes>
            <Route exact path="/" element={<PatientDashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/prescription" element={<PatientPrescription />} />
            <Route path="/appointments" element={<PatientAppointments />} />
            <Route path="/charts" element={<PatientCharts />} />
          </Routes>
        </Stack>
      );
    case "pharmacy":
      return (
        <Stack direction="row" className="bg-lightGrey">
          <DashboardSidepanel
            values={[
              { name: "Dashboard", url: "/dashboard/" },
              { name: "Profile", url: "/dashboard/profile" },
              { name: "Prescription", url: "/dashboard/prescription" },
              { name: "Appointments", url: "/dashboard/appointments" },
              { name: "Search Doctor", url: "/search" },
            ]}
          />
          <Routes>
            <Route exact path="/" element={<PatientDashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/prescription" element={<PatientPrescription />} />
            <Route path="/appointments" element={<PatientAppointments />} />
            <Route path="/charts" element={<PatientCharts />} />
          </Routes>
        </Stack>
      );
    default:
      return navigate("/login");
  }
};

export default DashboardRouter;
