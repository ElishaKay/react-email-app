import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export class Header2 extends React.Component {

  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { isOpen: false }
  }

  handleOpen() {
    this.setState({ isOpen: true })
  }

  handleClose() {
    setTimeout(function(){ 
     this.setState({ isOpen: false })
    }.bind(this), 3000);
  }

  render() {
    return (
       <Nav>
        <NavDropdown
          onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }
          noCaret
          id="language-switcher-container"
        >
          <MenuItem>Only one Item</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }
}

export default Header2;