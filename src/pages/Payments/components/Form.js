import React from 'react';

import Button from '../../../components/Button'

import {
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

export default props => (
  <form>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Name</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Start Date</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">End Date</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Frequency</div>
      <div className="col-sm-9">
        <input className="form-control" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Minimum Payment</div>
      <div className="col-sm-9">
        <textarea className="form-control"/>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Autopay</div>
      <div className="col-sm-9">
        <textarea className="form-control"/>
      </div>
    </div>

    <div className="form-group row">
      <div className="col-sm-9 offset-sm-3">
        <Button variant="primary"><FaEdit /> Edit Payee</Button>
        <Button variant="danger"><FaTrash /> Delete Payee</Button>
        <Button variant="outline-secondary">Back to Payees List</Button>
      </div>
    </div>
  </form>
)
