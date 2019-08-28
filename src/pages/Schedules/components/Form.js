import React, { useState } from 'react';

import { globalHistory } from '@reach/router'

import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Button from '../../../components/Button'
import InputGroup from '../../../components/InputGroup'

import {
  FaDollarSign,
  FaCalendarAlt
} from 'react-icons/fa';

import '../styles.scss'

export default props => {

  const [isChecked, setChecked] = useState(false)
  return (
    <form>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">Name</div>
        <div className="col-sm-9">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">Start Date</div>
        <div className="col-sm-9">
          <InputGroup append={<FaCalendarAlt />} />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">End Date</div>
        <div className="col-sm-9">
          <InputGroup append={<FaCalendarAlt />} />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">Frequency</div>
        <div className="col-sm-9">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">Minimum Payment</div>
        <div className="col-sm-9">
          <InputGroup prepend={<FaDollarSign />} />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-3 col-form-label" htmlFor="payee_name">Autopay</div>
        <div className="col-sm-9">
          <BootstrapSwitchButton
            checked={isChecked}
            onlabel='Enabled'
            onstyle='primary'
            offlabel='Disabled'
            offstyle='secondary'
            style='switch-autopay'
            onChange={() => setChecked(!isChecked)}
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-9 offset-sm-3">
          <Button variant="primary" type="submit">
            {globalHistory.location.pathname.includes('new') ? 'Create Schedule'
                                                             : 'Update Schedule'}
          </Button>
          <Button variant="outline-secondary" type="reset">Reset Form</Button>

          { globalHistory.location.pathname.includes('new')
            ? <Button variant="outline-secondary" url="/setup/payees/1">Back to Payee Details</Button>
            : <Button variant="outline-secondary" url="/setup/schedules/1">Back to Schedule Details</Button>
          }
        </div>
      </div>
    </form>
  )
}
