import React from 'react';

import Card from '../../components/Card'
import {toCurrency} from '../../helper'

const payments = [
  {
    payee: 'LA Fitness',
    schedule: 'Gym',
    date: '08/12/2019',
    due_date: '08/15/2019',
    amount: 33.75
  },
  {
    payee: 'Google Music',
    schedule: 'Google Music',
    date: '08/01/2019',
    due_date: '08/01/2019',
    amount: 14.99
  },
]

export default props => (
  <Card title="Payments" className="p-0">
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead className="thead-light">
        <tr>
        {['Payee', 'Schedule', 'Date', 'Due Date', 'Amount'].map(headerText => (
          <th>{headerText}</th>
        ))}
        </tr>
      </thead>
      <tbody>
      {payments.map(payment => (
        <tr>
          <td>{payment.payee}</td>
          <td>{payment.schedule}</td>
          <td>{payment.date}</td>
          <td>{payment.due_date}</td>
          <td className="text-right">{toCurrency(payment.amount)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </Card>
)
