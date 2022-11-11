import React from 'react';
import Button from '../Form_Button/Form_Button';
import './form.css';

const FormComponent = (props) => {
    const field_list = () => props.fields.map((field) => {
        return(<>
            <label>{field.label}</label><br />
            <input type='text' className='field_box' name={field.label} /> <br /><br />
        </>);
    });
    return ( <div className='container'>
        <div className='image'></div>
        <div className='form_fields'>
            {field_list()}
            <Button name={props.buton} />
        </div>
    </div> );
}

export default FormComponent;