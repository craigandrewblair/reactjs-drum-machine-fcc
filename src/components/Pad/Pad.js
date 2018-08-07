import React from 'react'
import './Pad.css';
import Button from '../Button/Button';

const pad = (props) => {

return (
  <div className='Pad'>
      <div className='Pad-Row'>
        <Button />
        <Button />
        <Button />
      </div>
      <div className='Pad-Row'>
        <Button />
        <Button />
        <Button />
      </div>
      <div className='Pad-Row'>
        <Button />
        <Button />
        <Button />
      </div>
  </div>
);
}

export default pad;
