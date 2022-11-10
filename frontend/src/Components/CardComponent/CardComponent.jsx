import React from 'react';
import './card.css';
const CardComponent = (props) => {
    return (<div className='card'>
        <div className='card_header'>{/*Insert the image here*/}</div>
        <div className='card_body'>
            <div className='heading'>{props.data.heading}</div>
            <div className='body'>{props.data.body}</div>
        </div>
    </div>);
}

export default CardComponent;