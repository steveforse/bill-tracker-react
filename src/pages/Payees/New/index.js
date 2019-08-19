import React, { Component } from 'react';

import Card from '../../../components/Card'
import Form from '../components/Form'

class  PayeeNew extends Component {
  render() {
    return (
        <Card title="New Payee">
          <Form />
        </Card>
    )
  }
}

export default PayeeNew;
