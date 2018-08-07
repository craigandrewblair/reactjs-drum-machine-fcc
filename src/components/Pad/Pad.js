import React from 'react'
import './Pad.css';
import Button from '../Button/Button';

const pad = (props) => {

return (
  <div className='Pad'>
      <div className='Pad-Row'>
        <Button txt='Q' id='heater1' onClick={() => props.onclick(props.url['Q'])}/>
        <Button txt='W' id='heater2' onClick={() => props.onclick(props.url['W'])}/>
        <Button txt='E' id='heater3' onClick={() => props.onclick(props.url['E'])}/>
      </div>
      <div className='Pad-Row'>
        <Button txt='A' id='heater4' onClick={() => props.onclick(props.url['A'])}/>
        <Button txt='S' id='heater5' onClick={() => props.onclick(props.url['S'])}/>
        <Button txt='D' id='heater6' onClick={() => props.onclick(props.url['D'])}/>
      </div>
      <div className='Pad-Row'>
        <Button txt='Z' id='openhh' onClick={() => props.onclick(props.url['Z'])}/>
        <Button txt='X' id='kicknhat' onClick={() => props.onclick(props.url['X'])}/>
        <Button txt='C' id='kick' onClick={() => props.onclick(props.url['C'])}/>
      </div>
  </div>
);
}

export default pad;
