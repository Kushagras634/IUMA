import React from "react";
import Form from "../Components/FormComponent";
import signUpImage from "../assets/Mobile-login.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import person from "../assets/person.webp";
import doctor from "../assets/doctor.webp";
import pharmacy from "../assets/pharmacy.jpg";
import hospital from "../assets/hospital.webp";
import laboratory from "../assets/laboratory.jpg";

import { Stack, Typography, Box } from "@mui/material";

import CardComponent from "../Components/CardComponent";
import HeaderComponent from "../Components/HeaderComponent";
import FormComponent from "../Components/FormComponent";

const patient_field_list = [
  { label: "Full Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "cpassword", type: "password" },
  { label: "Mobile", name: "mobile", type: "number" },
  { label: "Street", name: "street", type: "text" },
  { label: "House Number", name: "houseNumber", type: "text" },
  { label: "City", name: "city", type: "text" },
  { label: "State", name: "state", type: "text" },
];

const doctor_field_list = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Gender", name: "gender", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Contact Number", name: "contactNumber", type: "number" },
  { label: "Street", name: "address.street", type: "text" },
  { label: "House Number", name: "address.houseNumber", type: "text" },
  { label: "City", name: "address.city", type: "text" },
  { label: "State", name: "address.state", type: "text" },
  { label: "Specialization", name: "specialization", type: "text" },
  {
    label: "Medical License Number",
    name: "medicalLicenseNumber",
    type: "text",
  },
  {
    label: "License Issuing Authority",
    name: "licenseIssuingAuthority",
    type: "text",
  },
  {
    label: "License Expiration Date",
    name: "licenseExpirationDate",
    type: "date",
  },
  { label: "Qualifications", name: "qualifications", type: "text" },
  { label: "Practice Name", name: "practiceName", type: "text" },
  { label: "Years of Experience", name: "yearsOfExperience", type: "number" },
];

const hospital_field_list = [
  { label: "Hospital Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "cpassword", type: "password" },
  { label: "Contact Number", name: "contactNumber", type: "number" },
  { label: "Street", name: "address.street", type: "text" },
  { label: "House Number", name: "address.houseNumber", type: "text" },
  { label: "City", name: "address.city", type: "text" },
  { label: "State", name: "address.state", type: "text" },
  { label: "Registration Number", name: "registrationNumber", type: "text" },
  { label: "License Number", name: "licenseNumber", type: "text" },
  {
    label: "License Issuing Authority",
    name: "licenseIssuingAuthority",
    type: "text",
  },
  {
    label: "License Expiration Date",
    name: "licenseExpirationDate",
    type: "date",
  },
  {
    label: "Facilities",
    name: "facilities",
    type: "multiselect",
    options: [
      "Emergency Services",
      "Laboratory Services",
      "Radiology Services",
      "Pharmacy Services",
    ],
  },
];

const pharmacy_field_list = [
  { label: "Pharmacy Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Contact Number", name: "contactNumber", type: "number" },
  { label: "Street", name: "address.street", type: "text" },
  { label: "House Number", name: "address.houseNumber", type: "text" },
  { label: "City", name: "address.city", type: "text" },
  { label: "State", name: "address.state", type: "text" },
  { label: "Registration Number", name: "registrationNumber", type: "text" },
  { label: "License Number", name: "licenseNumber", type: "text" },
  {
    label: "License Issuing Authority",
    name: "licenseIssuingAuthority",
    type: "text",
  },
  {
    label: "License Expiration Date",
    name: "licenseExpirationDate",
    type: "date",
  },
];

const lab_field_list = [
  { label: "Medical Laboratory Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Contact Number", name: "contactNumber", type: "number" },
  { label: "Street", name: "address.street", type: "text" },
  { label: "House Number", name: "address.houseNumber", type: "text" },
  { label: "City", name: "address.city", type: "text" },
  { label: "State", name: "address.state", type: "text" },
  { label: "Registration Number", name: "registrationNumber", type: "text" },
  { label: "License Number", name: "licenseNumber", type: "text" },
  {
    label: "License Issuing Authority",
    name: "licenseIssuingAuthority",
    type: "text",
  },
  {
    label: "License Expiration Date",
    name: "licenseExpirationDate",
    type: "date",
  },
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

  const OcupationCards = ({ ocupation }) => (
    <Stack
      direction="row"
      flexWrap={`wrap`}
      justifyContent={`center`}
      alignItems={`center`}
      className="mt-4 w-2/4 m-auto"
    >
      {ocupation.map((ele, idx) => {
        return (
          <CardComponent
            key={idx}
            title={ele.title}
            img={ele.img}
            cardWidth="300px"
            imgWidth="200px"
            imgHeight="200px"
            link={`/signup?prof=${ele.title}`}
            margin="1rem"
          />
        );
      })}
    </Stack>
  );

  useEffect(() => {
    setLocation(new URLSearchParams(params).get("prof"));
  }, [params]);
  // console.log(profession,new URLSearchParams(params).get("prof"))

  return (
    <>
      <HeaderComponent />
      {
        {
          null: <OcupationCards ocupation={ocupation} />,
          Patient: (
            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>

              <FormComponent fields={patient_field_list} type="patient" />
            </Box>
          ),
          Doctor: (
            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <FormComponent fields={doctor_field_list} type="doctor" />
            </Box>
          ),
          Pharmacy: (
            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form fields={pharmacy_field_list} type="pharmacy" />
            </Box>
          ),
          Hospital: (
            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form fields={hospital_field_list} type="hospital" />
            </Box>
          ),
          Laboratory: (
            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form fields={lab_field_list} type="laboratory" />
            </Box>
          ),
        }[location]
      }
    </>
  );
};

export default SignupComponent;
