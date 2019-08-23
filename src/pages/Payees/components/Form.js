import React from 'react';

import Button from '../../../components/Button'

import { FaEdit } from 'react-icons/fa';

const buttons = window.location.pathname.split('/').pop() === 'edit' ? (
  <div className="col-sm-9 offset-sm-3">
    <Button variant="primary">Update Payee</Button>
    <Button variant="outline-secondary" type="reset">Reset Form</Button>
    <Button variant="outline-secondary" url="/setup/payees/30">Back to Payee Details</Button>
  </div>
) : (
  <div className="col-sm-9 offset-sm-3">
    <Button variant="primary" icon={FaEdit}>Create Payee</Button>
    <Button variant="outline-secondary" type="reset">Reset Form</Button>
    <Button variant="outline-secondary" url="/setup/payees">Back to Payees List</Button>
  </div>
)

export default props => (
  <form>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" htmlFor="payee_name">Name</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" htmlFor="payee_name">Nickname</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" htmlFor="payee_name">Website</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" htmlFor="payee_name">Phone Number</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" htmlFor="payee_name">Description</div>
      <div className="col-sm-9">
        <textarea className="form-control"/>
      </div>
    </div>

    <div className="form-group row">
      { buttons }
    </div>
  </form>
)
