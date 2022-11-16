import React from 'react';
import Button from '../Form_Button/Form_Button';
import './form.css';
import { Link } from 'react-router-dom';

const FormComponent = (props) => {
    const field_list = () => props.fields.map((field, idx) => {
        if(field.label==='Password') {
            return (<>
                <label>{field.label}</label>
                <input type='password' className='field_box' name={field.label} />
            </>);
        }
        else if(field.label==='Gender') {
            return (<div className='container' style={{alignItems:"center", margin:"1rem 0"}} >
                <label style={{margin:"0"}}>{field.label}</label>
                <input type='radio' name={field.label} />Male
                <input type='radio' name={field.label} />Female
            </div>);
        }
        else {
            return (<>
                <label>{field.label}</label>
                <input type='text' className='field_box' name={field.label} />
            </>);
        }
    });
    return ( <div className='container form_box'>
        <div className='form-image'>
            <img src={props.img} alt={props.heading} />
        </div>
        <div className='form_fields'>
            <h1>{props.heading}</h1>
            {field_list()}
            <Link to={props.redirectTo}><Button name={props.buton} /></Link>
        </div>
    </div> );
}

export default FormComponent;