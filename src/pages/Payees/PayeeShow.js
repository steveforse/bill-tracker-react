import React, { Component } from 'react';

import UrlLink from '../../components/UrlLink'
import PhoneLink from '../../components/PhoneLink'
import Card from '../../components/Card'
import Button from '../../components/Button.js'
import DeleteModal from '../../components/DeleteModal'

import { toCurrency } from '../../helper'

import {
  FaEdit,
  FaTrash,
  FaInfoCircle
} from 'react-icons/fa';

class  PayeeShow extends Component {
  state = {
    showModal: false,
    deleteUrl: null
  }

  handleModalShow = (e, url) => {
    e.preventDefault();
    this.setState({
      showModal: true,
      deleteUrl: url
    })
  }

  handleModalHide = (e) => {
    this.setState({
      showModal: false,
      deleteUrl: null
    })
  }

  handleEnter = () => {
    document.querySelector('.modal .btn.btn-default').focus()
  }

  render() {
    const scheduleColumns = ['Name', 'Start Date', 'End Date', 'Frequency', 'Autopay',
                             'Minimum Payment', 'Actions']
    const schedules = [
      {id: 1, name: 'Schedule A', end_date: '07/10/2019', frequency: 'Weekly', autopay: 'enabled', minimum_payment: 123.45}
    ]
    return (
      <>
        <Card title="Payee Details">
            <div className="row form-group">
              <div className="col-sm-3 col-form-label">Name</div>
              <div className="col-sm-9 form-control-plaintext">AAA Life Insurance</div>
            </div>
            <div className="row form-group">
              <div className="col-sm-3 col-form-label">Nickname</div>
              <div className="col-sm-9 form-control-plaintext">Life Insurance</div>
            </div>
            <div className="row form-group">
              <div className="col-sm-3 col-form-label">Website</div>
              <div className="col-sm-9 form-control-plaintext"><UrlLink url="http://example.com" /></div>
            </div>
            <div className="row form-group">
              <div className="col-sm-3 col-form-label">Phone Number</div>
              <div className="col-sm-9 form-control-plaintext"><PhoneLink phoneNumber="555-555-5555" /></div>
            </div>
            <div className="row form-group">
              <div className="offset-sm-3 col-sm-9 ">
                <Button variant="primary" url="/setup/payees/25/edit" icon={FaEdit}>Edit Payee</Button>
                <Button
                  variant="danger"
                  href={`/setup/payees/30`}
                  icon={FaTrash}
                  onClick={(e) => {this.handleModalShow(e, `/setup/payes/30`)}}>
                  Delete Payee
                </Button>
                <Button variant="outline-secondary" url="/setup/payees">Back to Payees List</Button>
              </div>
            </div>
        </Card>
        <br />
        <Card title="Schedules" className="p-0" headerButton={{text:'New Schedule', url:"/payees/1/schedules/new"}}>
          <table className="table table-bordered table-striped table-hover table-sm">
            <thead>
              <tr>
              {scheduleColumns.map( column => (
                <th>{column}</th>
              ))}
              </tr>
            </thead>
            <tbody>
            {schedules.map(schedule => (
              <tr>
                <td>{schedule.name}</td>
                <td>{schedule.start_date}</td>
                <td>{schedule.end_date}</td>
                <td>{schedule.frequency}</td>
                <td>{schedule.autopay}</td>
                <td className="text-right">{toCurrency.format(schedule.minimum_payment)}</td>
                <td><Button variant="primary" icon={FaInfoCircle}>Details</Button></td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <DeleteModal
          isShowing={this.state.showModal}
          modalHide={this.handleModalHide}
          onEnter={this.handleEnter}
          deleteUrl={this.state.deleteUrl}
          bodyText={`
            Deleting this payee will also peremanently delete all associated schedules with
            their payment histories. Are you sure you want to permanently delete this paye?
          `}
        />
      </>
    )
  }
}

export default PayeeShow;
