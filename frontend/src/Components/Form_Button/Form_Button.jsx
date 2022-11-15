import React from 'react';
import './Form_Button.css'
const Form_Button = (props) => {
    return (<>
        <button className='form_button'>{props.name}</button>
    </>);
}

export default Form_Button;