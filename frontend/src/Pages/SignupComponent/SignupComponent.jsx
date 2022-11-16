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

const field_list = [
  { label: "Full name" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Gender" },
];

const SignupComponent = () => {
  const params = useLocation().search;
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("")

  useEffect(() => {
    setLocation(new URLSearchParams(params).get("check"));
    if(location === 'detail'){
      setProfession(()=>new URLSearchParams(params).get("prof"))
    }
  }, [params]);
  // console.log(profession,new URLSearchParams(params).get("prof"))

  const handleProfession = (item) => {
    window.location.href = `/signup?check=detail&prof=${item}`
  }

  return (
    <>
      {
        {
          null: (
            <div style={{ paddingLeft: "2%" }}>
              <Form
                fields={field_list}
                img={signUpImage}
                heading="Create an Account"
                buton="Sign Up"
                image="doctor.png"
                redirectTo="/signup?check=org"
              />
            </div>
          ),
          'org': (
            <div className="org">
              <h1 className="org-heading">Chose your Profession</h1>
              <div className="org-row">
                <div style={{ background: `url(${person})` }} id="patient" onClick={()=>handleProfession("Patient")}>
                  <p>Patient</p>
                </div>
                <div style={{ background: `url(${doctor})` }} id='doctor' onClick={()=>handleProfession("Doctor")}>
                  <p>Doctor</p>
                </div>
                <div style={{ background: `url(${pharmacy})` }} id='pharmacy' onClick={()=>handleProfession("Pharmacy")}>
                  <p>Pharmacy</p>
                </div>
              </div>
              <div className="org-row">
                <div style={{ background: `url(${hospital})` }} id='hospital' onClick={()=>handleProfession("Hospital")}>
                  <p>Hospital</p>
                </div>
                <div style={{ background: `url(${laboratory})` }} id='laboratory'  onClick={()=>handleProfession("Laboratory")}>
                  <p>Laboratory</p>
                </div>
              </div>
            </div>
          ),
          'detail':{
            'Patient':(<div>Patient</div>),
            'Doctor':(<div>Doctor</div>),
            'Pharmacy':(<div>Pharmacy</div>),
            'Hospital':(<div>Hospital</div>),
            'Laboratory':(<div>Laoratory</div>)
          }[profession]
        }[location]
      }
    </>
  );
};

export default SignupComponent;
