import React from 'react'
import './Display.css';
import DisplayTxt from '../DisplayTxt/DisplayTxt';

const displayTxt = (props) => {

    return (
      <div className='Display'>
        <DisplayTxt txt='W' size={10}/>
        <DisplayTxt txt='W' size={20}/>
        <DisplayTxt txt='W' size={30}/>
        <DisplayTxt txt='W' size={40}/>
        <DisplayTxt txt='W' size={30}/>
        <DisplayTxt txt='W' size={20}/>
        <DisplayTxt txt='W' size={10}/>
      </div>
    );
  }

export default displayTxt;