import React from 'react'
import './DisplayTxt.css';

const displayTxt = (props) => {

  const cssClassesFadeInOut = ['Display-Txt', props.visible ? 'fadeIn' : 'fadeOut'];

    return (
      <div className={cssClassesFadeInOut.join(' ')}>
        <span style={{fontSize: props.size}}>{props.txt}</span>
      </div>
    );
  }

export default displayTxt;