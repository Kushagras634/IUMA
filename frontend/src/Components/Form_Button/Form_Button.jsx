import React from 'react';
import './Form_Button.css'
const Form_Button = (props) => {
    return (<>
        <div className='form_button'>{props.name}</div>
    </>);
}

export default Form_Button;