import React from "react";
import SvgComponent from "../Components/mainSVGComponent";
import CardComponent from "../Components/CardComponent";
import Button from "@mui/material/Button";
import { Box, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

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
  const list_card = () =>
    cards.map((card, idx) => {
      return (
        <CardComponent
          key={idx}
          title={card.heading}
          img=""
          cardWidth="350px"
          imgWidth="200px"
          imgHeight="200px"
          margin=".1rem"
          link=""
        />
      );
    });

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
                to='/'
                sx={{ margin: "1rem", padding: "1rem 2rem ", color: "white", fontSize: '1rem' }}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to='/search'
                sx={{ margin: "1rem", padding: "1rem 2rem ",border: "2px solid", fontSize: '1rem' }}
              >
                Search Doctors
              </Button>
            </Box>
          </Box>
          <div className="main-svg">
            <SvgComponent />
          </div>
        </Box>
        <div className="container" style={{ padding: "2%" }}>
          {list_card()}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default HomeComponent;
