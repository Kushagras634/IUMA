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
        <div>
            <Form fields={field_list} buton='Log in' />
        </div>
    </> );
}

export default LoginComponent;