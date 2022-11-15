import React from "react";
import Form from "../FormComponent/FormComponent";
import signUpImage from "../../assets/Mobile-login.jpg";

const field_list = [
  { label: "Full name" },
  { label: "Email" },
  { label: "Password" },
  { label: "Confirm Password" },
  { label: "Mobile Mumber" },
  { label: "Gender" },
];

const SignupComponent = () => {
  return (
    <>
      <div style={{ paddingLeft: "2%" }}>
        <Form
          fields={field_list}
          img={signUpImage}
          heading="Create an Account"
          buton="Sign Up"
          image="doctor.png"
        />
      </div>
    </>
  );
};

export default SignupComponent;
