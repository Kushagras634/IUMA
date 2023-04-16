import {
  Stack,
  Grid,
  Typography,
  Box,
  Divider,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import DashboardHeader from "../Components/DashboardHeader";
import profileImg from "../assets/profile.jpg";
import { IoDocumentTextOutline } from "react-icons/io5";

const PatientProfile = () => {
  const [appointment, setAppointment] = useState("pre");

  return (
    <Stack direction="column" className="ml-56 flex-1 w-full p-4">
      <DashboardHeader />
      <Box className="p-1 my-2 w-full flex ">
        <Stack direction="row" className="w-3/5 bg-white rounded">
          <Stack
            direction={`column`}
            alignItems={`center`}
            className="p-4 w-2/5 "
          >
            <Box className="w-32 h-32 rounded-full overflow-hidden ">
              <img src={profileImg} alt="profile" className="h-32 w-auto" />
            </Box>
            <Typography variant="h4" color="initial" className="pt-4 m-0">
              Jeevesh Lodhi
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className="font-extralight opacity-70"
            >
              lodhijeevesh@gmail.com
            </Typography>
            <Typography variant="h5" color="initial">
              Appointment
            </Typography>
            <Stack direction={`row`}>
              <Stack
                direction={`column`}
                alignItems={`center`}
                className="border-r-2 border-black border-solid px-6"
              >
                <Typography variant="h1" color="initial">
                  5
                </Typography>
                <Typography variant="subtitle1" color="initial">
                  Past
                </Typography>
              </Stack>
              <Stack
                direction={`column`}
                alignItems={`center`}
                className="px-6"
              >
                <Typography variant="h1" color="initial">
                  2
                </Typography>
                <Typography variant="subtitle1" color="initial">
                  Upcoming
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={`column`}
            justifyContent={`space-evenly`}
            className="w-3/5 border-solid border-black border-l "
          >
            <Stack
              direction={`row`}
              alignItems={`flex-end`}
              className="justify-between px-12 align-bottom  "
            >
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  Gender
                </Typography>
                <Typography variant="body2" color="initial">
                  Male
                </Typography>
                <Divider />
              </Box>
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  Birthday
                </Typography>
                <Typography variant="body2" color="initial">
                  May 27, 2000
                </Typography>
                <Divider />
              </Box>
            </Stack>
            <Stack
              direction={`row`}
              alignItems={`flex-end`}
              className="justify-between px-12 align-bottom "
            >
              <Box className="p-2 w-1/2 flex flex-col justify-between">
                <Typography variant="body1" color="initial">
                  Phone Number
                </Typography>
                <Typography variant="body2" color="initial">
                  +91 8004009942
                </Typography>
              </Box>
              <Box className="p-2 w-1/2 flex flex-col justify-between">
                <Typography variant="body1" color="initial">
                  Address
                </Typography>
                <Typography variant="body2" color="initial">
                  816, Shekhupura Colony, Vikas Nagar, Lucknow
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={`row`}
              alignItems={`flex-end`}
              className="justify-between px-12 align-bottom  "
            >
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  State
                </Typography>
                <Typography variant="body2" color="initial">
                  Uttar Pradesh
                </Typography>
                <Divider />
              </Box>
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  Pin Code
                </Typography>
                <Typography variant="body2" color="initial">
                  226022
                </Typography>
                <Divider />
              </Box>
            </Stack>
            <Stack
              direction={`row`}
              alignItems={`flex-end`}
              className="justify-between px-12 align-bottom  "
            >
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  Registration Date
                </Typography>
                <Typography variant="body2" color="initial">
                  June 12, 2006
                </Typography>
                <Divider />
              </Box>
              <Box className="p-2 w-1/2">
                <Typography variant="body1" color="initial">
                  Membership Status
                </Typography>
                <Typography variant="body2" color="initial">
                  Active
                </Typography>
                <Divider />
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={`column`}
          className="w-2/5 bg-white ml-4 p-4 rounded  "
        >
          <Typography variant="h5" color="initial" className="mb-4">
            Files / Documents
          </Typography>
          {Array(5)
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
      </Box>
      <Box className="p-3 my-2 w-full bg-white rounded ">
        <Stack
          direction={`row`}
          className="bg-lightGrey p-2 w-fit rounded-full  "
        >
          <button
            className="rounded-full px-6 py-3 mx-2 bg-white"
            onClick={() => setAppointment("pre")}
          >
            Upcoming appointments
          </button>
          <button
            className="rounded-full px-6 py-3 mx-2 bg-white"
            onClick={() => setAppointment("post")}
          >
            Past appointments
          </button>
        </Stack>
        <Stack className="w-full bg-lightGrey rounded-md my-1 ">
          {appointment === "pre"
            ? Array(2)
                .fill(0)
                .map((ele) => (
                  <Stack
                    direction={`row`}
                    justifyContent={`space-evenly`}
                    className="m-2 bg-white rounded-xl"
                  >
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-6 py-2 "
                    >
                      <Typography
                        variant="h5"
                        color="initial"
                        className="font-medium m-0"
                      >
                        01 Jun'20
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className="font-small"
                      >
                        09:00 AM
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className="m-0 opacity-50 "
                      >
                        Type
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className="text-lg font-medium"
                      >
                        Consultation
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className=" m-0 opacity-50 "
                      >
                        Doctor
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className=" text-lg font-medium"
                      >
                        Dr. Anita Sharma
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className=" m-0 opacity-50 "
                      >
                        Nurse
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className=" text-lg font-medium"
                      >
                        Jatin Gupta
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`row`}
                      alignItems={`center`}
                      className="w-full cursor-pointer rounded-lg leading-3 px-4 py-2 "
                    >
                      <IoDocumentTextOutline color="blue" />
                      <Typography
                        variant="subtitle2"
                        color="blue"
                        className="mx-2 text-lg font-medium"
                      >
                        Notes
                      </Typography>
                    </Stack>
                  </Stack>
                ))
            : Array(3)
                .fill(0)
                .map((ele) => (
                  <Stack
                    direction={`row`}
                    justifyContent={`space-evenly`}
                    className="m-2 bg-white rounded-xl"
                  >
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-6 py-2 "
                    >
                      <Typography
                        variant="h5"
                        color="initial"
                        className="font-medium m-0"
                      >
                        01 Jun'20
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className="font-small"
                      >
                        09:00 AM
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className="m-0 opacity-50 "
                      >
                        Type
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className="text-lg font-medium"
                      >
                        Consultation
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className=" m-0 opacity-50 "
                      >
                        Doctor
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className=" text-lg font-medium"
                      >
                        Dr. Anita Sharma
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`column`}
                      className="w-full rounded-lg leading-3 px-4 py-2 "
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        className=" m-0 opacity-50 "
                      >
                        Nurse
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className=" text-lg font-medium"
                      >
                        Jatin Gupta
                      </Typography>
                    </Stack>
                    <Stack
                      direction={`row`}
                      alignItems={`center`}
                      className="w-full cursor-pointer rounded-lg leading-3 px-4 py-2 "
                    >
                      <IoDocumentTextOutline color="blue" />
                      <Typography
                        variant="subtitle2"
                        color="blue"
                        className="mx-2 text-lg font-medium"
                      >
                        Notes
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default PatientProfile;
