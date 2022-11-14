import React from 'react';
import Form from '../FormComponent/FormComponent';

const field_list = [
    { 'label': 'Full name' },
    { 'label': 'Email' },
    {'label': 'Password'},
    {'label': 'Confirm password'},
    {'label': 'mobile number'},
    {'label': 'Gender'}
];

const SignupComponent = () => {
    return ( <>
        <div className='heading'>
            <p>Sign Up</p>
        </div>
        <div style={{ 'paddingLeft': '2%' }}>
            <Form fields={field_list} buton='Sign Up' image='doctor.png' />
        </div>
    </> );
}

export default SignupComponent;