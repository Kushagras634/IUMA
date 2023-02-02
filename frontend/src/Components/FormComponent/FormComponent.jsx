import React, { useState } from 'react';
import './form.css';
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



const FormComponent = (props) => {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        props.fields.forEach(field => {
            if (field.required && !formData[field.name]) {
                tempErrors[field.name] = `${field.label} is required`;
            }
        });
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        setErrors({
            ...errors,
            [event.target.name]: ""
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        // console.log(formData)
        // fetch('http://localhost:3001/patient/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // }).then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

        axios.post("http://localhost:8000/patient/signup", formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                console.log("Success : ", res);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                {props.fields.map((field, index) => (
                    <div key={index}>
                        {field.type !== 'group' && (
                            <>

                                {(field.type === 'text' || field.type === 'number') && (
                                    <>
                                        <TextField
                                            id="standard-basic"
                                            label={field.label}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}

                                        />
                                        <span style={{ color: 'red' }}>{errors[field.name]}</span>
                                    </>
                                )}
                                {field.type === 'email' && (
                                    <>
                                        <TextField
                                            id="standard-basic"
                                            label={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>{errors[field.name]}</span>
                                    </>
                                )}
                                {field.type === 'password' && (
                                    <>
                                        <TextField
                                            id="standard-basic"
                                            label={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>{errors[field.name]}</span>
                                    </>
                                )}
                                {field.type === 'radio' && (
                                    <div>
                                        {field.options.map((option, idx) => (
                                            <label key={idx}>
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    value={option.value}
                                                    checked={formData[field.name] === option.value}
                                                    onChange={handleChange}
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {field.type === 'select' && (
                                    <select
                                        name={field.name}
                                        value={formData[field.name] || ''}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                )}
                            </>
                        )}

                        {field.type === 'group' && (
                            <div>
                                <label>{field.label}</label>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flex: 1, marginRight: "10px" }}>
                                        {field.fields.map((subField, idx) => (
                                            <div key={idx}>
                                                
                                                <TextField
                                                  id="standard-basic"
                                                  label={subField.label}
                                                  value={formData[subField.name] || ''}
                                                  onChange={handleChange}
                                                  
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
    

                    </div>
                    
                ))}
                <Button variant="contained">
                  {props.buton}
                </Button>
            </form>
        </>

    );
}

export default FormComponent;