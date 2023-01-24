import React from "react";
import Form from "../../Components/FormComponent/FormComponent";
import signUpImage from "../../assets/Mobile-login.jpg";
import { useState } from "react";
import { Redirect, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import person from "../../assets/person.webp";
import doctor from "../../assets/doctor.webp";
import pharmacy from "../../assets/pharmacy.jpg";
import hospital from "../../assets/hospital.webp";
import laboratory from "../../assets/laboratory.jpg";
import "./sign.css";

const patient_field_list = [
  { label: 'Full Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Confirm Password', name: 'cpassword', type: 'password' },
  { label: 'Mobile', name: 'mobile', type: 'number' },
  {
    label: 'Address',
    type: 'group',
    fields: [
        {label: 'Street', name: 'street', type: 'text'},
        {label: 'House Number', name: 'houseNumber', type: 'text'},
        {label: 'City', name: 'city', type: 'text'},
        {label: 'State', name: 'state', type: 'text'},
    ]
},
];

const doctor_field_list = [
  { label: "Full name" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Gender" },
  { label: "Address" },
  { label: "Registration Number" },
  { label: "Year of Rgistration" },
  { label: "State Medical Council" },
  { label: "Degree" },
  { label: "College" },
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

  useEffect(() => {
    setLocation(new URLSearchParams(params).get("prof"));
  }, [params]);
  // console.log(profession,new URLSearchParams(params).get("prof"))

  const handleProfession = (item) => {
    window.location.href = `/signup?prof=${item}`
  }

  return (
    <>
      {
        {
          null: (
            <div className="org">
              <h1 className="org-heading">Chose your Profession</h1>
              <div className="org-row">
                <div style={{ background: `url(${person})` }} id="patient" onClick={() => handleProfession("Patient")}>
                  <p>Patient</p>
                </div>
                <div style={{ background: `url(${doctor})` }} id='doctor' onClick={() => handleProfession("Doctor")}>
                  <p>Doctor</p>
                </div>
                <div style={{ background: `url(${pharmacy})` }} id='pharmacy' onClick={() => handleProfession("Pharmacy")}>
                  <p>Pharmacy</p>
                </div>
              </div>
              <div className="org-row">
                <div style={{ background: `url(${hospital})` }} id='hospital' onClick={() => handleProfession("Hospital")}>
                  <p>Hospital</p>
                </div>
                <div style={{ background: `url(${laboratory})` }} id='laboratory' onClick={() => handleProfession("Laboratory")}>
                  <p>Laboratory</p>
                </div>
              </div>
            </div>
          ),
          'Patient': (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={patient_field_list}
                img={signUpImage}
                heading="Sign Up as Patient"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </div>
          ),
          'Doctor': (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={doctor_field_list}
                img={signUpImage}
                heading="Sign Up as Doctor"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </div>
          ),
          'Pharmacy': (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={pharmacy_field_list}
                img={signUpImage}
                heading="Sign Up as Pharmacy"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </div>
          ),
          'Hospital': (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={hospital_field_list}
                img={signUpImage}
                heading="Sign Up as Hospital"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </div>
          ),
          'Laboratory': (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={lab_field_list}
                img={signUpImage}
                heading="Sign Up as Laboratory"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/"
              />
            </div>
          ),

        }[location]
      }
    </>
  );
};

export default SignupComponent;
