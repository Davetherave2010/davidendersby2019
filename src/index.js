import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import Footer from './components/Footer.jsx';

import Home from './routes/Home.jsx';
// import About from './routes/About.jsx';

import './styles/index.scss';

ReactDOM.render(
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className="push"></div>
      </div>
      <Footer />
    </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
