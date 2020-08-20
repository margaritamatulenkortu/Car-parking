import React, {useEffect, useState} from 'react';
import {
	Navbar, 
	Nav, 
	DropdownButton,
	Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { Consumer } from '../Context';
import ProfileDropdown from './ProfileDropdown'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')))

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
    return () => ''
  }, isLoggedIn)

	return(
    <Consumer>
      { () =>
      <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand href="/" className='btn btn-outline-primary shadow-lg rounded-pill'>
            <img
              alt="Error"
              src={logo}
              width="30"
              height="30"
              className="  align-top"
            />
          eception
        </Navbar.Brand>
    
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <DropdownButton id="dropdown-basic-button mx-4 " title="Action">
            <Dropdown.Item href="/car-parking">Car Parking</Dropdown.Item>
            <Dropdown.Item href="/badge">Badge request</Dropdown.Item>
            <Dropdown.Item href="/booking">Room Booking</Dropdown.Item>
          </DropdownButton>
            { isLoggedIn ? <ProfileDropdown /> : <Link to='/login' className="mx-4 btn  btn-primary"> Sign In</Link> }
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
    }
  </Consumer>
	)
}

export default Header