import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { GlobalContext } from "../context/GlobalState";

import {
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

function showToast(message, color, textColor, duration) {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      backgroundColor: color,
      color: textColor,
    },
  });
}

const FormComponent = ({ fields, type }) => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser, logoutUser } = useContext(GlobalContext);

  const validate = () => {
    let tempErrors = {};
    fields.forEach((field) => {
      if (field.type === "group") {
        field.fields.forEach((subField) => {
          if (!formData[subField.name]) {
            tempErrors[subField.name] = "This field is required";
          }
        });
      } else {
        if (!formData[field.name]) {
          tempErrors[field.name] = "This field is required";
        }
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    if (location.pathname === "/signup") {
      let url = "http://localhost:8000/auth/register";
      console.log(url);
      var data = formData;
      data["profession"] = type;
      console.log(data);
      await axios
        .post(url, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "User created") {
            showToast(
              "SignUp Successful, Please Login",
              "#23C552",
              "white",
              2000
            );
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else if (location.pathname === "/login") {
      let url = "http://localhost:8000/auth/login";
      console.log(url);
      const { data } = await axios.post(url, formData);
      console.log(data);
      loginUser(data);

      if (data.message === "Patient not found") {
        showToast(
          "Email do not exists, Please SignUp",
          "#F84F31",
          "white",
          2000
        );
        // navigate("/signup");
      } else if (data.message === "Invalid password") {
        setErrors({ password: "Invalid Password" });
      } else if (data.message === "Login Successful") {
        loginUser(data);
        sessionStorage.setItem("token", JSON.stringify(data));

        showToast("Login Successful", "#23C552", "white", 2000);
        navigate("/dashboard");
      } else {
        showToast("Error: Please try again", "#F84F31", "white", 2000);
        navigate("/");
      }
    }
  };

  const renderFields = () => {
    return fields.map((field, index) => {
      if (field.type === "date") {
        return (
          <FormControl
            error={errors[field.name] ? true : false}
            key={index}
            sx={{ margin: "10px" }}
          >
            <TextField
              id={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              onChange={handleChange}
            />
            {errors[field.name] && (
              <FormHelperText>{errors[field.name]}</FormHelperText>
            )}
          </FormControl>
        );
      } else if (field.type === "multiselect") {
        return (
          <FormControl
            error={errors[field.name] ? true : false}
            key={index}
            sx={{ margin: "10px" }}
          >
            <InputLabel>{field.label}</InputLabel>
            <Select
              onChange={handleChange}
              name={field.name}
              defaultValue={""}
              label={field.label}
            >
              {field.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      } else {
        return (
          <FormControl
            error={errors[field.name] ? true : false}
            key={index}
            sx={{ margin: "10px" }}
          >
            <TextField
              id={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              fullWidth
              required
              onChange={handleChange}
            />
            {errors[field.name] && (
              <FormHelperText>{errors[field.name]}</FormHelperText>
            )}
          </FormControl>
        );
      }
    });
  };

  return (
    // <ThemeProvider >

    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-full items-center"
    >
      <Box
        className={
          location.pathname === "/login"
            ? `flex flex-col w-1/4`
            : `grid gap-1 grid-cols-2 w-2/4`
        }
      >
        {renderFields()}
      </Box>
      <Button type="submit" variant="contained" className="px-10 py-3 mt-8">
        Submit
      </Button>
    </form>

    // </ThemeProvider>
  );
};

export default FormComponent;
