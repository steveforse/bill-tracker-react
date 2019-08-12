import React from 'react';
import { Router } from "@reach/router";

import Header from './Header'

import NotFound from './NotFound'
import Calendar from './Calendar'
import Payments from './Payments'
import Setup from './Setup'


import './stylesheets/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <NotFound default />
          <Calendar path='/' />
          <Calendar path='/calendar' />
          <Payments path='/payments' />
          <Setup path='setup/*' />
        </Router>
      </div>
    </div>
  );
}

export default App;
