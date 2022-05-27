import React from 'react'

import {Article, Header, Brand, Navbar, Scan } from './components';
import './App.css';

const App = () => {
  return (
    <div  className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        {/* <Brand />
        <Footer /> */}
        <br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default App