import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import { IoDocumentTextOutline } from "react-icons/io5";
import Prescription from "../../Components/PrescriptionComponent";

const PatientPrescription = () => {
  return (
    <Stack className="ml-56 flex-1 w-full p-4">
      <DashboardHeader />
      <Stack direction={`row`}>
        <Stack
          direction={`column`}
          className="w-1/3 bg-white my-2  p-4 rounded"
        >
          <Typography variant="h5" color="initial" className="mb-4">
            Files / Documents
          </Typography>
          {Array(9)
            .fill(0)
            .map((ele, idx) => (
              <Card className="my-1">
                <CardActionArea>
                  <CardContent className="flex justify-between ">
                    <Stack direction={`row`} alignItems={`center`}>
                      <IoDocumentTextOutline />
                      <Typography variant="h6" color="initial" className="px-4">
                        Blood Test
                      </Typography>
                    </Stack>
                    <Typography variant="h6" color="initial">
                      91.5Kb
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </Stack>
        <Stack className="bg-white my-2  p-4 rounded w-2/3 ml-2">
          <Prescription
            patientDetails={{
              name: "Jeevesh Lodhi",
              age: "22",
              address: "816, Shekhupura Colony, Vikas Nagar, Lucknow",
            }}
            doctorDetails={{
              name: "Dr. Raj Singh",
              registrationNumber: "738731873883884",
            }}
            medicines={[
              { name: "XYZ", dosage: "2 times a day", duration: "1 week" },
            ]}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PatientPrescription;
