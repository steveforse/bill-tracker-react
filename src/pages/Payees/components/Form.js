import React from 'react';
import { globalHistory } from '@reach/router'

import Button from '../../../components/Button'

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
      <div className="col-sm-9 offset-sm-3">
        <Button variant="primary">
          {globalHistory.location.pathname.includes('new') ? 'Create Payee'
                                                           : 'Update Payee'}
        </Button>
        <Button variant="outline-secondary" type="reset">Reset Form</Button>
        {globalHistory.location.pathname.includes('new')
          ? <Button variant="outline-secondary" url="/setup/payees">Back to Payees List</Button>
          : <Button variant="outline-secondary" url="/setup/payees/30">Back to Payee Details</Button>}
      </div>
    </div>
  </form>
)
