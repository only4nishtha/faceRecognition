import React from 'react'
import Webcam from 'react-webcam';
import WebcamCapture from './components/webcam.js';

import {Article, Header, Brand, Navbar, Scan } from './components';
import './App.css';
import './detect.css';

const Detect = () => {
  return (
    <div  className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Scan />
            <WebcamCapture/>
        {/* <Brand />
        <Footer /> */}
      </div>
    </div>
  )
}

export default Detect