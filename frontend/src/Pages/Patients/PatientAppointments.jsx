import { Stack, Box,Typography } from "@mui/material";
import React, {useState} from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
// import '../css/app.css'
const PatientAppointments = () => {
  const [appointment, setAppointment] = useState("pre");
  return (
    <Box className="ml-56 p-3 my-2 w-full bg-white rounded ">
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
  );
};

export default PatientAppointments;
