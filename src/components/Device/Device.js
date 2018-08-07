import React, { Component } from 'react';
import './Device.css';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';

class Device extends Component {
  render() {
    return(
      <div id='Device-Div'>
        <Display />
        <Pad />
      </div>
    );
  }
}

export default Device;