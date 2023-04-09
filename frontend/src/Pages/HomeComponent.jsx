import React from "react";
import SvgComponent from "../Components/mainSVGComponent";
import CardComponent from "../Components/CardComponent";
import Button from "@mui/material/Button";
import {
  Box,
  Typography,
  createTheme,
  Stack,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import Header from "../Components/HeaderComponent";
import DoctorIcon from "../assets/doctorIcon.png";
import LocatioIcon from "../assets/locationIcon.png";
import CalenderIcon from "../assets/calendaIconr.png";
import IdeaBulb from "../assets/idea-bulb.png";
import IconCard from "../Components/IconCard";
import BloodTest from "../assets/blood-test.png";
import KidneyTest from "../assets/kidney.png";
import ThyroidTest from "../assets/thyroid-test.png";
import XrayTest from "../assets/x-ray.png";
import UrineTest from "../assets/urine-test.png";

const cards = [
  {
    heading: "Instant Video Consultation",
    body: "Connect within 60 sec",
  },
  {
    heading: "Find Doctor Near You",
    body: "Connect within 60 sec",
  },
  {
    heading: "Order Medicine",
    body: "Connect within 60 sec",
  },
  {
    heading: "Instant Video Consultation",
    body: "Connect within 60 sec",
  },
  {
    heading: "Find Doctor Near You",
    body: "Connect within 60 sec",
  },
  {
    heading: "Order Medicine",
    body: "Connect within 60 sec",
  },
];

const HomeComponent = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2EC5BC",
        light: "#2EC5BC",
        dark: "#2EC5BC",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "1rem",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}
          >
            <Typography
              color="initial"
              sx={{ fontSize: "5.3rem", lineHeight: 1 }}
            >
              Deliver accurate and timely health care.
            </Typography>
            <Typography variant="h5" color="initial">
              A trustworthy healthcare campanion. We really care about your
              health and consiousness.{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "2rem 1rem",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/"
                sx={{
                  margin: "1rem",
                  padding: "1rem 2rem ",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/search"
                sx={{
                  margin: "1rem",
                  padding: "1rem 2rem ",
                  border: "2px solid",
                  fontSize: "1rem",
                }}
              >
                Search Doctors
              </Button>
            </Box>
          </Box>
          <div className="main-svg">
            <SvgComponent />
          </div>
        </Box>
        <Box
          sx={{
            backgroundColor: "#2EC5BC",
            margin: "2rem",
            padding: "2rem",
            borderRadius: "10px",
            height: "200px",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" color="white" width="400px">
              Easy Steps To Get Your Solution
            </Typography>
            <Typography
              variant="h6"
              color="white"
              width="500px"
              textAlign="right"
            >
              Easy Make Appointments With Our Best Doctors For Your Family
              Members
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "-10rem",
          }}
        >
          <IconCard
            img={DoctorIcon}
            title="Search Doctor"
            subTitle="Search Doctor by Category Before Booking your Appointment"
          />
          <IconCard
            img={LocatioIcon}
            title="Choose Your Location"
            subTitle="Then enter your location and we will find a doctor near you"
          />
          <IconCard
            img={CalenderIcon}
            title="Schedule Appointment"
            subTitle="Then select a date and set an appointment"
          />
          <IconCard
            img={IdeaBulb}
            title="Get the Solution"
            subTitle="We will help you find solutions for your health"
          />
        </Box>

        <Box sx={{ margin: "2rem" }}>
          <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h4" color="initial">
              Get Tested
            </Typography>
            <Link href="#">show more </Link>
            
          </Stack>

          <Stack direction="row" justifyContent="center ">
            <IconCard img={BloodTest} title="Blood Tests" link="/" />
            <IconCard img={UrineTest} title="Urine Test" link="/" />
            <IconCard img={XrayTest} title="X-ray" link="/" />
            <IconCard img={ThyroidTest} title="Thyroid Tests" link="/" />
            <IconCard img={KidneyTest} title="Kidney Tests" link="/" />
          </Stack>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default HomeComponent;
