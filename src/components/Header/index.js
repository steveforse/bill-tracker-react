import React, { Component } from 'react';
import {
	Navbar,
	Nav,
  Button,
} from 'react-bootstrap';

import { FaSignOutAlt } from 'react-icons/fa';
import Logo from './images/logo.png'

import './styles/Header.scss'

class  Header extends Component {
  render() {
    return (
			<Navbar bg="light" expand="lg" className="mb-4">
				<Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-1"
            alt="Bill Tracker logo"
          />
          {' Bill Tracker'}
        </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/calendar">Calendar</Nav.Link>
						<Nav.Link href="/payments">Payments</Nav.Link>
						<Nav.Link href="/setup">Setup</Nav.Link>
					</Nav>
          <Button variant="danger"><FaSignOutAlt /> Logout</Button>
				</Navbar.Collapse>
			</Navbar>
    )
  }
}

export default Header;
