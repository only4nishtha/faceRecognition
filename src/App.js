import React from 'react'

// import Article from './components/article/Article'
// import Brand from './components/brand/Brand'
// import CTA from './components/cta/CTA'
// import Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar'

import { Footer, Blog, Possibility, Features, Header, Mirror } from './containers'
import {CTA, Brand, Navbar } from './components';
import './App.css';
// import Background from './img/placeholder.png';

const App = () => {
  return (
    // <div style = {{ backgroundImage: 'url(${Background})' }}>Hello</div>
    
    <div  className="App">
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Mirror />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App