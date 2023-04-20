import React, { useEffect, useState } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

import {
  TextField,
  FormControl,
  FormHelperText,
  Typography,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
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
  const [profession, setProfession] = useState("");

  useEffect(() => {
    console.log(location);

    setProfession(location.search.split("=")[1]);
  }, []);

  const dispatch = useDispatch();

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

  const handleRadioChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddressChange = (event, field) => {
    setFormData({
      ...formData,
      address: { ...formData.address, [field]: event.target.value },
    });
    setErrors({ ...errors, [field]: "" });
  };

  const addAddress = () => {
    setFormData({
      ...formData,
      address: [...formData.address, { street: "", houseNo: "" }],
    });
  };

  const handleSubmit = (event) => {
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
      axios
        .post(url, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Patient created") {
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
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Patient not found") {
            showToast(
              "Email do not exists, Please SignUp",
              "#F84F31",
              "white",
              2000
            );
            // navigate("/signup"); 
          } else if (res.data.message === "Invalid password") {
            setErrors({ password: "Invalid Password" });
          } else if (res.data.message === "Patient logged in successfully") {
            localStorage.setItem("token", res.data.token);
            dispatch(login({ token: res.data.token }));
            showToast("Login Successful", "#23C552", "white", 2000);
            navigate("/");
          } else {
            showToast("Error: Please try again", "#F84F31", "white", 2000);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
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
      <Box className="grid gap-1 grid-cols-2 w-2/4">{renderFields()}</Box>
      <Button type="submit" variant="contained" sx={{ minWidth: "30vw" }}>
        Submit
      </Button>
    </form>

    // </ThemeProvider>
  );
};

export default FormComponent;
