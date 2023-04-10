import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  createTheme,
  Container,
  Grid,
  Typography,
  Divider
} from "@mui/material";
import Social from "./Social";

const footerStyle = {
  backgroundColor: "#003049",
  color: "white",
  padding: "1rem",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2}>
            <img
              src={logo}
              alt=""
              style={{ width: "100px", padding: "2rem 0" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" sx={{ padding: "1rem 0" }}>
              Product
            </Typography>
            {[
              "Overview",
              "Pricing",
              "Customer stories",
              "Integration",
              "Security",
            ].map((item, idx) => {
              return (
                <Typography
                  variant="subtitle1"
                  key={idx}
                  sx={{
                    opacity: ".6",
                    cursor: "pointer",
                    padding: ".3rem 0",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" sx={{ padding: "1rem 0" }}>
              Resources
            </Typography>
            {["Blog", "Guides & Tutorials", "Help Center", "What's new"].map(
              (item, idx) => {
                return (
                  <Typography
                    variant="subtitle1"
                    key={idx}
                    sx={{
                      opacity: ".6",
                      cursor: "pointer",
                      padding: ".3rem 0",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    {item}
                  </Typography>
                );
              }
            )}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" sx={{ padding: "1rem 0" }}>
              Template
            </Typography>
            {[
              "Landing",
              "Dashboard",
              "Log In and Sign Up",
              "Hospitals",
              "Laboratories",
              "Pharmacy",
              "Doctors",
            ].map((item, idx) => {
              return (
                <Typography
                  variant="subtitle1"
                  key={idx}
                  sx={{
                    opacity: ".6",
                    cursor: "pointer",
                    padding: ".3rem 0",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              <Typography variant="h6" sx={{ padding: "1rem 0" }}>
                Company
              </Typography>
              {[
                "About Us",
                "Media Kit",
                "Contact Support",
                "Terms and Conditions",
                "Privacu Policy",
              ].map((item, idx) => {
                return (
                  <Typography
                    variant="subtitle1"
                    key={idx}
                    sx={{
                      opacity: ".6",
                      cursor: "pointer",
                      padding: ".3rem 0",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              <Typography variant="h6" sx={{ padding: "1rem 0" }}>
                Social
              </Typography>
              <Social color="white" />
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{borderColor: 'white', opacity: '.5', padding: '1rem 0'}} />
        <Typography variant="subtitle2" sx={{color: 'white', opacity: '.5', padding: '1rem 0'}}>
          Copywite &copy; 2023 IUMA. All rights reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
