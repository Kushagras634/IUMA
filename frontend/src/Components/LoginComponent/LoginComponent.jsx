import React from "react";
import Form from "../FormComponent/FormComponent";
import "./login.css";
import sideImg from "../../assets/4587.jpg";

const field_list = [
  { label: "Login email or mobile  number" },
  { label: "Password" },
];
const LoginComponent = () => {
  return (
    <div className="login-wrapper">
      <Form fields={field_list} img={sideImg} heading="Log in" buton="Log in" />
    </div>
  );
};

export default LoginComponent;
