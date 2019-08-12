import React, { Component } from 'react';
import { Router } from '@reach/router';

import Payees from './Payees';
import PayeeShow from './PayeeShow';

class  Setup extends Component {
  render() {
    return (
      <Router>
        <Payees path='/' />
        <Payees path='payees' />
        <PayeeShow path='payees/:id' />
      </Router>
    )
  }
}

export default Setup;
