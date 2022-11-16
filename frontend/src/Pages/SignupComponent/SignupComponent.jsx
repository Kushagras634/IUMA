import React from "react";
import Form from "../../Components/FormComponent/FormComponent";
import signUpImage from "../../assets/Mobile-login.jpg";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import person from '../../assets/person.webp'
import doctor from '../../assets/doctor.webp'
import pharmacy from '../../assets/pharmacy.jpg'
import hospital from '../../assets/hospital.webp'
import laboratory from '../../assets/laboratory.jpg'
import './sign.css'

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
  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation(new URLSearchParams(params).get("check"));
  }, [params]);

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
          'org': <div className="org">
            <h1 className="org-heading">Chose your Profession</h1>
            <div className="org-row">
              <figure>
                <img src={person} alt="" />
              </figure>
              <figure>
                <img src={doctor} alt="" />
              </figure>
              <figure>
                <img src={pharmacy} alt="" />
              </figure>
            </div>
            <div className="org-row">
              <figure>
                <img src={hospital} alt="" />
              </figure>
              <figure>
                <img src={laboratory} alt="" />
              </figure>
            </div>
          </div>,
        }[location]
      }
    </>
  );
};

export default SignupComponent;
