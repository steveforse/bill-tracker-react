import React, { useState } from 'react';

import Card from '../../components/Card'
import Button from '../../components/Button'
import DeleteModal from '../../components/DeleteModal'

import { toCurrency } from '../../helper'

import {
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

export default props => {
  const [isShowingScheduleModal, setShowScheduleModal] = useState(false)
  const handleCloseScheduleModal = () => setShowScheduleModal(false)
  const handleShowScheduleModal = () => setShowScheduleModal(true)

  const [isShowingPaymentModal, setShowPaymentModal] = useState(false)
  const handleClosePaymentModal = () => setShowPaymentModal(false)
  const handleShowPaymentModal = () => setShowPaymentModal(true)

  const handleEnter = () => document.querySelector('.modal.show .btn.btn-default').focus()

  const payments = [
    {
      id: 1,
      date: 'Schedule A',
      due_date: '07/10/2019',
      amount: 123.45,
      comment: 'Remember to cancel before December 1st'
    }
  ]

  const schedule = {
    id: 1,
    name: 'Schedule A',
    start_date: '07/10/2019',
    end_date: '07/17/2019',
    frequency: 'Weekly',
    autopay: 'Enabled',
    minimum_payment: 123.45
  }

  return (
    <>
      <Card title="Schedule Details">
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">Name</div>
            <div className="col-sm-9 form-control-plaintext">{schedule.name}</div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">Start Date</div>
            <div className="col-sm-9 form-control-plaintext">{schedule.start_date}</div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">End Date</div>
            <div className="col-sm-9 form-control-plaintext">{schedule.end_date}</div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">Frequency</div>
            <div className="col-sm-9 form-control-plaintext">{schedule.frequency}</div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">Autopay</div>
            <div className="col-sm-9 form-control-plaintext">{schedule.autopay}</div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3 col-form-label">Minimum Payment</div>
            <div className="col-sm-9 form-control-plaintext">
              {toCurrency(schedule.minimum_payment)}
            </div>
          </div>
          <div className="row form-group">
            <div className="offset-sm-3 col-sm-9 ">
              <Button variant="primary" icon={FaEdit} url="/setup/schedules/1/edit">Edit Schedule</Button>
              <Button variant="danger" icon={FaTrash} onClick={handleShowScheduleModal}>Delete Schedule</Button>
              <Button variant="outline-secondary" url="/setup/payees/1">Back to Payee Details</Button>
            </div>
          </div>
      </Card>
      <br />
      <Card
        title="Payments"
        className="p-0"
        headerButton={{text:'New Payment', url:"/setup/schedules/1/payments/new"}}>
        <table className="table table-bordered table-striped table-hover table-sm">
          <thead className="thead-light">
            <tr>
            {['Date', 'Due Date', 'Amount', 'Comment', 'Actions'].map( column => (
              <th>{column}</th>
            ))}
            </tr>
          </thead>
          <tbody>
          {payments.map(payment => (
            <tr>
              <td>{payment.date}</td>
              <td>{payment.due_date}</td>
              <td className="text-right">{toCurrency(payment.amount)}</td>
              <td>{payment.comment}</td>
              <td className="text-nowrap">
                <Button variant="primary" icon={FaEdit} url="/setup/payments/1/edit">
                  Edit Payment
                </Button>
                <Button variant="danger" icon={FaTrash} onClick={handleShowPaymentModal}>
                  Delete Payment
                </Button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </Card>
      <DeleteModal
        isShowing={isShowingScheduleModal}
        modalHide={handleCloseScheduleModal}
        onEntered={handleEnter}
        deleteUrl={'/setup/schedules/1'}
        bodyText={`
          Deleting this schedule will also permanently delete all associated historical payments.
          Are you sure you want to delete this schedule?
        `}
      />
      <DeleteModal
        isShowing={isShowingPaymentModal}
        modalHide={handleClosePaymentModal}
        onEntered={handleEnter}
        deleteUrl={'/setup/payments/1'}
        bodyText={`
          Are you sure you want to permanently delete this payment?
        `}
      />
    </>
  )
}

