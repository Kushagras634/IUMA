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

import {  Stack, Typography, Box } from "@mui/material";

import CardComponent from "../Components/CardComponent";

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
  { label: "Medical License Number", name: "medicalLicenseNumber", type: "text" },
  { label: "License Issuing Authority", name: "licenseIssuingAuthority", type: "text" },
  { label: "License Expiration Date", name: "licenseExpirationDate", type: "date" },
  { label: "Qualifications", name: "qualifications", type: "text" },
  { label: "Practice Name", name: "practiceName", type: "text" },
  { label: "Practice Location", name: "practiceLocation", type: "text" },
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
  { label: "License Issuing Authority", name: "licenseIssuingAuthority", type: "text" },
  { label: "License Expiration Date", name: "licenseExpirationDate", type: "date" },
  { label: "Facilities", name: "facilities", type: "multiselect", options: ["Emergency Services", "Laboratory Services", "Radiology Services", "Pharmacy Services"] },
];

const pharmacy_field_list =[
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
  { label: "License Issuing Authority", name: "licenseIssuingAuthority", type: "text" },
  { label: "License Expiration Date", name: "licenseExpirationDate", type: "date" },
  { label: "Facilities Provided", name: "facilities", type: "checkbox", options: ["Medicines", "Medical Equipment", "Healthcare Products"] },
];

const lab_field_list =[
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
  { label: "License Issuing Authority", name: "licenseIssuingAuthority", type: "text" },
  { label: "License Expiration Date", name: "licenseExpirationDate", type: "date" },
  { label: "Facilities Provided", name: "facilities", type: "checkbox", options: ["Blood Tests", "Urine Tests", "Pathology Tests", "X-ray Services", "Microbiology Tests", "Genetic Testing"] },
  { label: "Accept Terms & Conditions", name: "termsAndConditionsAccepted", type: "checkbox" },
  { label: "Captcha Verification", name: "captchaVerified", type: "checkbox" }
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
                        cardWidth="300px"
                        imgWidth="200px"
                        imgHeight="200px"
                        link={`/signup?prof=${ele.title}`}
                        margin="1rem"
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </>
          ),
          Patient: (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form
                fields={patient_field_list}
                img={signUpImage}
                heading="Sign Up as Patient"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Box>
          ),
          Doctor: (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form
                fields={doctor_field_list}
                img={signUpImage}
                heading="Sign Up as Doctor"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Box>
          ),
          Pharmacy: (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form
                fields={pharmacy_field_list}
                img={signUpImage}
                heading="Sign Up as Pharmacy"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Box>
          ),
          Hospital: (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form
                fields={hospital_field_list}
                img={signUpImage}
                heading="Sign Up as Hospital"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Box>
          ),
          Laboratory: (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ marginBottom: "3rem" }}
              >
                Sign Up{" "}
              </Typography>
              <Form
                fields={lab_field_list}
                img={signUpImage}
                heading="Sign Up as Laboratory"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </Box>
          ),
        }[location]
      }
    </>
  );
};

export default SignupComponent;
