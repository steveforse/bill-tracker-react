import React from 'react';

import { Router, Redirect } from '@reach/router'

import Header from './components/Header'
import NotFound from './components/NotFound'

import Calendar from './pages/Calendar'
import Payments from './pages/Payments'

import PayeesIndex from './pages/Payees/Index'
import PayeeShow from './pages/Payees/Show'
import PayeeNew from './pages/Payees/New'
import PayeeEdit from './pages/Payees/Edit'

import ScheduleNew from './pages/Schedules/New'
import ScheduleEdit from './pages/Schedules/Edit'
import ScheduleShow from './pages/Schedules/Show'

import PaymentNew from './pages/Payments/New'
import PaymentEdit from './pages/Payments/Edit'
import PaymentShow from './pages/Payments/Show'

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
        <Redirect from='/setup' to='/setup/payees' noThrow />

        {/* Payees */}
        <PayeesIndex path='/setup/payees' />
        <PayeeNew path='/setup/payees/new' />
        <PayeeShow path='/setup/payees/:id' />
        <PayeeEdit path='/setup/payees/:id/edit' />

        {/* Schedules */}
        <ScheduleNew path='/setup/payees/:id/schedules/new' />
        <ScheduleShow path='/setup/schedules/:id' />
        <ScheduleEdit path='/setup/schedules/:id/edit' />

        {/* Payments */}
        <PaymentNew path='/setup/schedules/:id/payments/new' />
        <PaymentShow path='/setup/payments/:id' />
        <PaymentEdit path='/setup/payements/:id/edit' />

        {/* 404-ish */}
				<NotFound default />
			</Router>
		</div>
	</>
)
