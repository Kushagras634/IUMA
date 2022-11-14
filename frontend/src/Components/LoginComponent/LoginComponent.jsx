import React from 'react';
import Form from '../FormComponent/FormComponent';
import './login.css';

const field_list = [
    { 'label': 'Login email or mobile  number'},
    { 'label': 'Password'}
];
const LoginComponent = () => {
    return ( <>
        <div className='heading'>
            <p>Log in</p>
        </div>
        <div style={{'paddingLeft':'2%'}}>
            <Form fields={field_list} buton='Log in' image='doctor.png' />
        </div>
    </> );
}

export default LoginComponent;