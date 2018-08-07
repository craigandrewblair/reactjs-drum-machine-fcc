import React from 'react'
import './Display.css';
import DisplayTxt from '../DisplayTxt/DisplayTxt';

const displayTxt = (props) => {

    return (
      <div id='display'>
        <DisplayTxt txt={props.txt} size={10}/>
        <DisplayTxt txt={props.txt} size={20}/>
        <DisplayTxt txt={props.txt} size={30}/>
        <DisplayTxt txt={props.txt} size={40}/>
        <DisplayTxt txt={props.txt} size={30}/>
        <DisplayTxt txt={props.txt} size={20}/>
        <DisplayTxt txt={props.txt} size={10}/>
      </div>
    );
  }

export default displayTxt;