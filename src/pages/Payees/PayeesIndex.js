import React, { Component } from 'react';

import {
  Button,
  Table,
} from 'react-bootstrap';

import {
  FaTrash,
  FaInfoCircle,
} from 'react-icons/fa';

import PhoneLink from '../../components/PhoneLink'
import UrlLink from '../../components/UrlLink'
import DeleteModal from '../../components/DeleteModal'
import Card from '../../components/Card'

class  PayeesIndex extends Component {
  state = {
    showModal: false,
    deleteUrl: null
  };

  handleModalShow = (e, url) => {
    e.preventDefault();
    this.setState({
      showModal: true,
      deleteUrl: url
    });
  };

  handleModalHide = (e) => {
    this.setState({
      showModal: false,
      deleteUrl: null
    });
  }

  handleEnter = () => {
    document.querySelector('.modal .btn.btn-default').focus();
  }

  render() {
    const payees = [
      {
        id: 1,
        name: 'AAA Life Insurance',
        nickname: 'Sample',
        website: 'https://www.aaalife.com/eServices/eservices/account/login.jsp',
        phone_number: '888-562-4262'
      },

      {
        id: 2,
        name: 'AAA Life Insurance',
        nickname: 'Sample',
        website: 'https://www.aaalife.com/eServices/eservices/account/login.jsp',
        phone_number: '888-562-4262'
      },

      {
        id: 3,
        name: 'AAA Life Insurance',
        nickname: 'Sample',
        website: 'https://www.aaalife.com/eServices/eservices/account/login.jsp',
        phone_number: '888-562-4262'
      },

      {
        id: 4,
        name: 'AAA Life Insurance',
        nickname: 'Sample',
        website: 'https://www.aaalife.com/eServices/eservices/account/login.jsp',
        phone_number: '888-562-4262'
      }
    ]

    return (
      <>
        <Card title="Payees" className="p-0" headerButton={{ text: 'New Payee', url: '/setup/payees/new' }}>
          <Table striped bordered hover responsive size="sm">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Nickname</th>
                <th>Website</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payees.map(payee => {
                return(<tr key={payee.id.toString()}>
                  <td>{payee.name}</td>
                  <td>{payee.nickname}</td>
                  <td><UrlLink url={payee.website} /></td>
                  <td><PhoneLink phoneNumber={payee.phone_number} /></td>
                  <td className="text-nowrap">
                    <Button variant="primary" href={`/setup/payees/${payee.id}`}>
                      <FaInfoCircle />{' Details'}
                    </Button>
                    <Button
                      variant="danger"
                      href={`/setup/payees/${payee.id}`}
                      onClick={(e) => {this.handleModalShow(e, `/setup//payees/${payee.id}`)}}>
                      <FaTrash />{' Delete'}
                    </Button>
                  </td>
                </tr>)
              })}
            </tbody>
          </Table>
        </Card>

        <DeleteModal
          isShowing={this.state.showModal}
          modalHide={this.handleModalHide}
          onEnter={this.handleEnter}
          deleteUrl={this.state.deleteUrl}
          bodyText={`
            Deleting this payee will also permanently delete all associated schedules with
            their payment histories. Are you sure you want to permanently delete this payee?
          `}
        />
      </>
    )
  }
}

export default PayeesIndex;