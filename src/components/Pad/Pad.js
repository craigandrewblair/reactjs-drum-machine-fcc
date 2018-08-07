import React from 'react'
import './Pad.css';
import Button from '../Button/Button';

const pad = (props) => {

return (
  <div className='Pad'>
      <div className='Pad-Row'>
        <Button txt='Q'/>
        <Button txt='W'/>
        <Button txt='E'/>
      </div>
      <div className='Pad-Row'>
        <Button txt='A'/>
        <Button txt='S'/>
        <Button txt='D'/>
      </div>
      <div className='Pad-Row'>
        <Button txt='Z'/>
        <Button txt='X'/>
        <Button txt='C'/>
      </div>
  </div>
);
}

export default pad;
