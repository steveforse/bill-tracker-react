import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import rrulePlugin from '@fullcalendar/rrule'
import listPlugin from '@fullcalendar/list'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/bootstrap/main.css'
import '@fullcalendar/list/main.css'

import { Card, Row, Col } from 'react-bootstrap'

class  Calendar extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <div className="h4">Calendar</div>
        </Card.Header>
        <Card.Body className="p-0">
          <Row>
            <Col md="12" lg="8" className="mb-4">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin, bootstrapPlugin, rrulePlugin ]}
            themeSystem='bootstrap'
            fixedWeekCount={false}
            showNonCurrentDates={false}
          />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default Calendar;
