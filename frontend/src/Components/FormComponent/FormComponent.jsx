import React from 'react';
import Button from '../Form_Button/Form_Button';
import './form.css';

const FormComponent = (props) => {
    const field_list = () => props.fields.map((field) => {
        if(field.label==='Password') {
            return (<>
                <label>{field.label}</label>
                <input type='password' className='field_box' name={field.label} /><br />
            </>);
        }
        else if(field.label==='Gender') {
            return (<div className='container'>
                <label>{field.label}</label>
                <input type='radio' name={field.label} />Male
                <input type='radio' name={field.label} />Female
            </div>);
        }
        else {
            return (<>
                <label>{field.label}</label>
                <input type='text' className='field_box' name={field.label} /><br />
            </>);
        }
    });
    return ( <div className='container form_box'>
        <div className='image'>
            <img src={props.image} height="400" width='500' />
        </div>
        <div className='form_fields'>
            {field_list()}
            <br />
            <Button name={props.buton} />
        </div>
    </div> );
}

export default FormComponent;