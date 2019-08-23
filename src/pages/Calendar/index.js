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

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

library.add(faChevronLeft, faChevronRight)
dom.watch()

const events = [
  {
    "title": "Van Payment",
    "rrule": "DTSTART=20190701T000000;FREQ=MONTHLY;INTERVAL=1",
    "extendedProps": {
      "schedule_id": 23,
      "payee": {
        "id": 18,
        "name": "Mercedes Benz Financial Services",
        "nickname": null,
        "website": "https://www.mbfs.com",
        "phone_number": "1-800-700-9212"
      },
      "payments": [],
      "minimum_payment": "1000.0",
      "autopay": true,
      "start_date": "2019-07-01",
      "end_date": null,
      "frequency": "Once every month"
    }
  },
  {
    "title": "Van Insurance",
    "rrule": "DTSTART=20190728T000000;FREQ=MONTHLY;INTERVAL=1",
    "extendedProps": {
      "schedule_id": 30,
      "payee": {
        "id": 24,
        "name": "Progressive Insurance (UNITED FIN CAS)",
        "nickname": null,
        "website": "https://account.progressive.com/access/login/",
        "phone_number": null
      },
      "payments": [],
      "minimum_payment": "74.4",
      "autopay": true,
      "start_date": "2019-07-28",
      "end_date": null,
      "frequency": "Once every month"
    }
  },
  {
    "title": "Gym",
    "rrule": "DTSTART=20190728T000000;FREQ=MONTHLY;INTERVAL=1",
    "extendedProps": {
      "schedule_id": 35,
      "payee": {
        "id": 29,
        "name": "LA Fitness",
        "nickname": "Gym",
        "website": null,
        "phone_number": null
      },
      "payments": [
        {
          "due_date": "2019-07-28",
          "date": "2019-07-17",
          "amount": "45.0",
          "comment": ""
        }
      ],
      "minimum_payment": "45.0",
      "autopay": true,
      "start_date": "2019-07-28",
      "end_date": null,
      "frequency": "Once every month"
    }
  },
  {
    "title": "Life Insurance",
    "rrule": "DTSTART=20190710T000000;UNTIL=20190717T000000;FREQ=MONTHLY;INTERVAL=1",
    "extendedProps": {
      "schedule_id": 39,
      "payee": {
        "id": 30,
        "name": "AAA Life Insurance",
        "nickname": null,
        "website": "https://www.aaalife.com/eServices/eservices/account/login.jsp",
        "phone_number": null
      },
      "payments": [
        {
          "due_date": "2019-07-10",
          "date": "2019-07-02",
          "amount": "42.0",
          "comment": null
        }
      ],
      "minimum_payment": "45.0",
      "autopay": true,
      "start_date": "2019-07-10",
      "end_date": "2019-07-17",
      "frequency": "Once every month"
    }
  }
]


class  Calendar extends Component {
  calendarRef = React.createRef()
  listRef = React.createRef()

  calendarAction(action) {
    let calendarApi = this.calendarRef.current.getApi()
    let listApi = this.listRef.current.getApi()

    calendarApi[action]()
    listApi[action]()
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="h4">Calendar</div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-4">
              <FullCalendar
                ref={this.calendarRef}
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, bootstrapPlugin, rrulePlugin ]}
                themeSystem='bootstrap'
                fixedWeekCount={false}
                showNonCurrentDates={false}
								events={events}
                customButtons={{
                  today: {
                    text: 'Today',
                    click: () => this.calendarAction('today')
                  },
                  prev: { click: () => this.calendarAction('prev') },
                  next: { click: () => this.calendarAction('next') }
                }}
              />
              <fieldset className="border p-2">
                <legend className="w-auto">Monthly Totals</legend>
                <div className="totals-container">
                  <table className="table table-sm">
										<tbody>
											<tr>
												<td className="text-right font-weight-bold">Minimum Total</td>
												<td className="text-left">$0.00</td>
											</tr>
											<tr>
												<td className="text-right font-weight-bold">Amount Paid</td>
												<td className="text-left">$0.00</td>
											</tr>
										</tbody>
                  </table>
                </div>
              </fieldset>
              <fieldset className="border p-2">
                <legend className="w-auto">Color Legend</legend>
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <span className="fc-event-dot payment unpaid-late" />
                    {" Unpaid Late"}
                  </div>
                  <div className="col-sm-4 text-center">
                    <span className="fc-event-dot payment unpaid-due" />
                    {" Paid Late"}
                  </div>
                  <div className="col-sm-4 text-center">
                    <span className="fc-event-dot payment paid-late" />
                    {" Paid"}
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="col-md-12 col-lg-4">
              <FullCalendar
                defaultView="listMonth"
                ref={this.listRef}
                plugins={[ bootstrapPlugin, listPlugin, rrulePlugin ]}
                header={{ left: '', center: '', right: ''  }}
								events={events}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;
