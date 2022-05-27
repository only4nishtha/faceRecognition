import React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import App from './App';
import Detect from './Detect';
import './index.css';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/scan' element={<Detect />}></Route>
      </Routes>
    </Router>,
    document.getElementById('root')
);