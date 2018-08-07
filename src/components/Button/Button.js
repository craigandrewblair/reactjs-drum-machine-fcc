import React from 'react'
import './Button.css';

const button = (props) => {
    
    return (
      <div className='drum-pad' id={props.id} onClick={props.onClick}>
        {props.txt}<audio className='clip' id={props.txt} src='#'></audio>
      </div>
    );
  }

export default button;