import React from 'react';

import { Router, Redirect } from '@reach/router'

import Header from './components/Header'
import NotFound from './components/NotFound'

import Calendar from './pages/Calendar'

import PayeesIndex from './pages/Payees/PayeesIndex'
import PayeeShow from './pages/Payees/PayeeShow'
import PayeeNew from './pages/Payees/PayeeNew'
import PayeeEdit from './pages/Payees/PayeeEdit'

import ScheduleNew from './pages/Schedules/ScheduleNew'
import ScheduleEdit from './pages/Schedules/ScheduleEdit'
import ScheduleShow from './pages/Schedules/ScheduleShow'

import PaymentsIndex from './pages/Payments/PaymentsIndex'
import PaymentNew from './pages/Payments/PaymentNew'
import PaymentEdit from './pages/Payments/PaymentEdit'

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
				<PaymentsIndex path="/payments" />

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
        <PaymentEdit path='/setup/payments/:id/edit' />

        {/* 404-ish */}
				<NotFound default />
			</Router>
		</div>
	</>
)
