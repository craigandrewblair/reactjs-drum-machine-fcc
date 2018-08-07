import React from 'react'
import './Button.css';

const button = (props) => {

    return (
      <div className='Button'>
        {props.txt}
      </div>
    );
  }

export default button;