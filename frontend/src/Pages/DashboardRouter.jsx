import React, { useContext } from "react";
import { Route,  Routes, useNavigate } from "react-router-dom";
import DashboardSidepanel from "../Components/DashboardSidepanel";
import PatientDashboard from "./Patients/PatientDashboard";
import { Stack } from "@mui/material";
import PatientProfile from "./Patients/PatientProfile";
import PatientPrescription from "./Patients/PatientPrescription";
import PatientAppointments from "./Patients/PatientAppointments";
import PatientCharts from "./Patients/PatientCharts";
import { GlobalContext } from "../context/GlobalState";
const DashboardRouter = () => {
  const { profession } = useContext(GlobalContext);
  const navigate = useNavigate()

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
    case 'doctor':
      return (
        <Stack direction="row" className="bg-lightGrey">
          Doctor Dashboard
          {/* <DashboardSidepanel
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
          </Routes> */}
        </Stack>
      )
    case 'hospital':
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
      )
    case 'laboratory':
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
      )
    case 'pharmacy':
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
      )
    default:
      return navigate('/login')
  }
};

export default DashboardRouter;
