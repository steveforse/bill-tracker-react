import React from 'react';
import {globalHistory} from '@reach/router'

import Button from '../../../components/Button'
import InputGroup from '../../../components/InputGroup'

import {
  FaDollarSign,
  FaCalendarAlt,
} from 'react-icons/fa';

export default props => (
  <form>
    <div className="alert alert-warning">
      This schedule is currently configured for autopay. Automatic payment will be skipped for
      due date if a manual payment is created.
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Date</div>
      <div className="col-sm-9">
        <InputGroup append={<FaCalendarAlt />} />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Due Date</div>
      <div className="col-sm-9">
        <InputGroup append={<FaCalendarAlt />} />
      </div>
    </div>
    <div className="form-group row">
      <div className="offset-sm-3 col-sm-9">
        <small>Minimum Payment for this schedule is $45.00</small>
      </div>
      <div className="col-sm-3 col-form-label" for="payee_name">Amount</div>
      <div className="col-sm-9">
        <InputGroup prepend={<FaCalendarAlt />} />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-3 col-form-label" for="payee_name">Comment</div>
      <div className="col-sm-9">
        <textarea className="form-control"/>
      </div>
    </div>

    <div className="form-group row">
      <div className="col-sm-9 offset-sm-3">
        <Button variant="primary">
          {globalHistory.location.pathname.includes('new')
            ? 'Create Payment'
            : 'Update Payment'}
        </Button>
        <Button variant="outline-secondary">Reset Form</Button>
        <Button variant="outline-secondary" url="/setup/schedules/1">Back to Schedule</Button>
      </div>
    </div>
  </form>
)
