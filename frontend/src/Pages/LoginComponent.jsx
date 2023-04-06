import React from "react";
import Form from "../Components/FormComponent";
import sideImg from "../assets/4587.jpg";
import { Box, Typography } from "@mui/material";

const field_list = [
  { label: "Login email or mobile  number", name: 'email', type : 'text' },
  { label: "Password", name: 'password', type: 'password' },
];
const LoginComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <Typography variant="h4" color="initial" sx={{ marginBottom: "3rem" }}>
        Login{" "}
      </Typography>
      <Form
        fields={field_list}
        img={sideImg}
        redirectTo="/"
        heading="Log in"
        buton="Log in"
      />
    </Box>
  );
};

export default LoginComponent;
