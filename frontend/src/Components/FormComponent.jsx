import React, { useEffect, useState } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  TextField,
  FormControl,
  FormHelperText,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

function showToast( message, color, textColor, duration) {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      backgroundColor: color,
      color:textColor,
    },
  });
}

const FormComponent = ({ fields }) => {
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
    console.log(formData);

    if (location.pathname === "/signup") {
      let url = "http://localhost:8000/" + profession.toLowerCase() + "/signup";
      console.log(url);
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Patient created") {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } else if (location.pathname === "/login") {
      let url = "http://localhost:8000/login";
      console.log(url);
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Patient not found") {
            showToast('Email do not exists, Please SignUp', '#F84F31', 'white', 2000)
            navigate('/signup')
          }
          else if(res.data.message === "Invalid password"){
            setErrors({password: 'Invalid Password' })
          }
          else if(res.data.message === 'Patient logged in successfully'){
            localStorage.setItem('jwt', res.data.token)
            showToast('Login Successful', '#23C552', 'white', 2000)
            navigate('/')
          }
          else{
            showToast('Error: Please try again', '#F84F31', 'white', 2000)
            navigate('/')
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const renderFields = () => {
    return fields.map((field, index) => {
      if (field.type === "group") {
        return (
          <React.Fragment key={index}>
            <Typography variant="h6">{field.label}</Typography>
            <Box display="flex" flexDirection="column">
              {field.fields.map((subField, subIndex) => {
                return (
                  <Box flex="1 0 50%" key={subIndex}>
                    <FormControl error={errors[subField.name]}>
                      <TextField
                        id={subField.name}
                        label={subField.label}
                        name={subField.name}
                        type={subField.type}
                        fullWidth
                        required
                        onChange={handleChange}
                      />
                      {errors[subField.name] && (
                        <FormHelperText>{errors[subField.name]}</FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                );
              })}
            </Box>
          </React.Fragment>
        );
      } else {
        return (
          <FormControl
            error={errors[field.name]? true:false}
            key={index}
            sx={{ minWidth: "30vw", margin: "10px" }}
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

    <form onSubmit={handleSubmit}  >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "40vw",
        }}
      >
        {renderFields()}
        <Button type="submit" variant="contained" sx={{ minWidth: "30vw" }}>
          Submit
        </Button>
      </Box>
    </form>

    // </ThemeProvider>
  );
};

export default FormComponent;
