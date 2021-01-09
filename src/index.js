import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import Footer from './components/Footer.jsx';

import Home from './routes/Home.jsx';
import About from './routes/About.jsx';

import './styles/index.scss';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*">
          <Redirect to="/" />
        </Route>
        // <Route path="/about" component={About}/>
      </Switch>
      <Footer />
    </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
