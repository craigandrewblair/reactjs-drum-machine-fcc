import React, { Component } from 'react';
import './Device.css';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import H1 from '../../sounds/Heater-1.mp3';
import H2 from '../../sounds/Heater-2.mp3';
import H3 from '../../sounds/Heater-3.mp3';
import H4 from '../../sounds/Heater-5.mp3';
import H6 from '../../sounds/Heater-6.mp3';
import Dsc_Oh from '../../sounds/Dsc_Oh.mp3';
import KH from '../../sounds/Kick_n_Hat.mp3';
import RP4_KICK_1 from '../../sounds/RP4_KICK_1.mp3';
import Cev_H2 from '../../sounds/Cev_H2.mp3';

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: {
        'Q' : H1,
        'W': H2,
        'E': H3,
        'A': H4,
        'S': H6,
        'D': Dsc_Oh,
        'Z': KH,
        'X': RP4_KICK_1,
        'C': Cev_H2
      },
      lastPlayed: ''    
    }
  }

  audioHandler = (url) => {
    let audio = new Audio(url);
    audio.play();
    this.setState({
      lastPlayed: Object.keys(this.state.url).find(key => this.state.url[key] === url)
    });
  }

  render() {
    return(
      <div id='drum-machine'>
        <Display txt={this.state.lastPlayed}/>
        <Pad onclick={this.audioHandler} url={this.state.url}/>
      </div>
    );
  }
}

export default Device;