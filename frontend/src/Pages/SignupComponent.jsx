import React from "react";
import Form from "../Components/FormComponent/FormComponent";
import signUpImage from "../assets/Mobile-login.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import person from "../assets/person.webp";
import doctor from "../assets/doctor.webp";
import pharmacy from "../assets/pharmacy.jpg";
import hospital from "../assets/hospital.webp";
import laboratory from "../assets/laboratory.jpg";

import {
  Container,
  Stack,
  Toolbar,
  Box,
  CssBaseline,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const patient_field_list = [
  { label: "Full Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "cpassword", type: "password" },
  { label: "Mobile", name: "mobile", type: "number" },
  {
    label: "Address",
    type: "group",
    fields: [
      { label: "Street", name: "street", type: "text" },
      { label: "House Number", name: "houseNumber", type: "text" },
      { label: "City", name: "city", type: "text" },
      { label: "State", name: "state", type: "text" },
    ],
  },
];

const doctor_field_list = [
  { label: "Full Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "cpassword", type: "password" },
  { label: "Mobile", name: "mobile", type: "number" },
  { label: "date of Birth", name: "dob", type: "date" },
  {
    label: "Address",
    type: "group",
    fields: [
      { label: "Street", name: "street", type: "text" },
      { label: "House Number", name: "houseNumber", type: "text" },
      { label: "City", name: "city", type: "text" },
      { label: "State", name: "state", type: "text" },
    ],
  },
  { label: "College", name: "college", type: "text" },
  { label: "Year of Passing", name: "yop", type: "date" },
  { label: "Registration Number", name: "registration", type: "text" },
];

const hospital_field_list = [
  { label: "Namw" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Address" },
  { label: "Registration Id" },
];

const pharmacy_field_list = [
  { label: "Name" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Address" },
  { label: "Registration Number" },
];

const lab_field_list = [
  { label: "Full name" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Address" },
  { label: "Registration Number" },
];

const SignupComponent = () => {
  const params = useLocation().search;
  const [location, setLocation] = useState("");

  const ocupation = [
    {
      img: person,
      title: "Patient",
    },
    {
      img: doctor,
      title: "Doctor",
    },
    {
      img: pharmacy,
      title: "Pharmacy",
    },
    {
      img: hospital,
      title: "Hospital",
    },
    {
      img: laboratory,
      title: "Laboratory",
    },
  ];

  useEffect(() => {
    setLocation(new URLSearchParams(params).get("prof"));
  }, [params]);
  // console.log(profession,new URLSearchParams(params).get("prof"))

  const handleProfession = (item) => {
    window.location.href = `/signup?prof=${item}`;
  };

  const CardComponent = ({ img, title }) => {
    return (
      <Card sx={{ maxWidth: "300px", cursor: "pointer", margin: "1rem" }}>
        <CardActionArea onClick={() => handleProfession(title)}>
          <CardMedia
            image={img}
            title={title}
            sx={{ height: "200px", width: "220px" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <>
      {
        {
          null: (
            <>
              <Stack
                direction="column"
                sx={{
                  minHeight: "85vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    maxWidth: "60vw",
                  }}
                >
                  {ocupation.map((ele, idx) => {
                    return (
                      <CardComponent
                        key={idx}
                        title={ele.title}
                        img={ele.img}
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </>
          ),
          Patient: (
            <Container>
              <Form
                fields={patient_field_list}
                img={signUpImage}
                heading="Sign Up as Patient"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Container>
          ),
          Doctor: (
            <Container maxWidth="xs">
              <Form
                fields={doctor_field_list}
                img={signUpImage}
                heading="Sign Up as Doctor"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Container>
          ),
          Pharmacy: (
            <Container maxWidth="xs">
              <Form
                fields={pharmacy_field_list}
                img={signUpImage}
                heading="Sign Up as Pharmacy"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Container>
          ),
          Hospital: (
            <Container maxWidth="xs">
              <Form
                fields={hospital_field_list}
                img={signUpImage}
                heading="Sign Up as Hospital"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Container>
          ),
          Laboratory: (
            <Container maxWidth="xs">
              <Form
                fields={lab_field_list}
                img={signUpImage}
                heading="Sign Up as Laboratory"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Container>
          ),
        }[location]
      }
    </>
  );
};

export default SignupComponent;
