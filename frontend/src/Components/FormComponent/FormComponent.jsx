import React, { useState } from "react";
import "./form.css";
import axios from "axios";
// import TextField from "@mui/material/TextField";
import { TextField, FormControl, FormHelperText, Grid, Typography, Button } from '@mui/material';
import { createMuiTheme, ThemeProvider, makeStyles } from "@mui/material/styles";



const FormComponent = ({ fields }) => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

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
    console.log(formData)

    axios
      .post("http://localhost:8000/patient/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Success : ", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const renderFields = () => {
    return fields.map((field, index) => {
      if (field.type === "group") {
        return (
          <React.Fragment key={index}>
            <Typography variant="h6">{field.label}</Typography>
            <Grid container spacing={2}>
              {field.fields.map((subField, subIndex) => {
                return (
                  <Grid item xs={6} key={subIndex}>
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
                  </Grid>
                );
              })}
            </Grid>
          </React.Fragment>
        );
      } else  {
        return (
          <FormControl error={errors[field.name]} key={index}>
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
      <form onSubmit={handleSubmit}>
        { renderFields()}
        <input type="submit" value="Submit" />
      </form>
    // </ThemeProvider>
  );
};

export default FormComponent;
