import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Estate.css';

function Estate() {
  return (
    <div className='Estate-container'>
    <video 
      src= "C:\Users\SUPRIYAADAPALA\react-sdpproject-rms\src\videos\coolestate_video.mp4" autoPlay loop muted />
      <h1>COOL -ESTATES </h1>
      <p>Searching for a house? or plot? Flat</p>
      <div className='Estates-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Estate;