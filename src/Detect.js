import React from 'react'

import {Article, Header, Brand, Navbar, Scan } from './components';
import './App.css';

const Detect = () => {
  return (
    <div  className="App">
        <div className='gradient__bg'>
            <Scan />
        {/* <Brand />
        <Footer /> */}
      </div>
    </div>
  )
}

export default Detect