import React from 'react';

import { Router, Redirect } from '@reach/router'

import Header from './components/Header'
import NotFound from './components/NotFound'

import Calendar from './pages/Calendar'
import Payments from './pages/Payments'
import Setup from './pages/Setup'

import Payees from './pages/Payees'
import PayeesIndex from './pages/Payees/Index'
import PayeeShow from './pages/Payees/Show'

import './styles/App.scss'

export default props => (
  <>
		<Header />
		<div className="container">
			<Router>

        {/* Calendar */}
				<Calendar path="/" />
				<Calendar path="/calendar" />

        {/* Payments */}
				<Payments path="/payments" />

        {/* Setup */}
        <Setup path="setup" >
          <Redirect from='/' to='/setup/payees' noThrow />
          <Payees path='payees' >
            <PayeesIndex path='/' />
            <PayeeShow path=':id' />
          </Payees>
        </Setup>

				<NotFound default />
			</Router>
		</div>
	</>
)
