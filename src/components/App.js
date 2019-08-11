import React from 'react';

import Header from './Header'
import Payees from './Payees'

import './stylesheets/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Payees />
      </div>
    </div>
  );
}

export default App;
