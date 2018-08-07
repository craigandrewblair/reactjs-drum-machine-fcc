import React from 'react'
import './Display.css';
import DisplayTxt from '../DisplayTxt/DisplayTxt';

const displayTxt = (props) => {

    return (
      props.txt === '' ?
      <div id='display'>
        <DisplayTxt txt='Play That Beat!' size={25} visible={props.visible}/>
      </div>:
      <div id='display'>
        <DisplayTxt txt={props.txt} size={10} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={20} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={30} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={40} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={30} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={20} visible={props.visible}/>
        <DisplayTxt txt={props.txt} size={10} visible={props.visible}/>
      </div> 
    );
  }

export default displayTxt;