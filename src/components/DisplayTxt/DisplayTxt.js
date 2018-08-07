import React from 'react'
import './DisplayTxt.css';

const displayTxt = (props) => {

    return (
      <div id='Display-Txt'>
        <span style={{fontSize: props.size}}>{props.txt}</span>
      </div>
    );
  }

export default displayTxt;