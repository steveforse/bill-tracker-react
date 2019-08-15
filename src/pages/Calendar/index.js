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

import {
  Card,
  Row,
  Col,
  Table
} from 'react-bootstrap'

class  Calendar extends Component {
  calendarRef = React.createRef()
  listRef = React.createRef()

  today() {
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.today()

    let listApi = this.listRef.current.getApi()
    listApi.today()
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <div className="h4">Calendar</div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md="12" lg="8" className="mb-4">
              <FullCalendar
                ref={this.calendarRef}
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, bootstrapPlugin, rrulePlugin ]}
                themeSystem='bootstrap'
                fixedWeekCount={false}
                showNonCurrentDates={false}
                customButtons={{
                  today: {
                    text: 'Today',
                    click: (e) => {
                      let calendarApi = this.calendarRef.current.getApi()
                      calendarApi.today()

                      let listApi = this.listRef.current.getApi()
                      listApi.today()
                    }
                  }
                }}
              />
              <fieldset className="border p-2">
                <legend className="w-auto">Monthly Totals</legend>
                <div className="totals-container">
                  <Table size="sm">
                  </Table>
                </div>
              </fieldset>

            </Col>
            <Col md="12" lg="4">
              <FullCalendar
                defaultView="listMonth"
                ref={this.listRef}
                plugins={[ bootstrapPlugin, listPlugin, rrulePlugin ]}
                header={{ left: '', center: '', right: ''  }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default Calendar;
