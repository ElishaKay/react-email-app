import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
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
    }.bind(this), 1000);
  }

  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return (
          <Navbar.Collapse>
          <Nav>
              <NavItem eventKey={1} href="#">
                <Link
                  to={this.props.auth ? '/surveys' : '/'}
                  className="left brand-logo"
                >
                  Crowd-It!
                </Link>
              </NavItem>
          <NavItem eventKey={1}><Payments />
              </NavItem>
          <NavItem  eventKey={2} style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </NavItem>
          <NavDropdown 
                onMouseEnter = { this.handleOpen }
                onMouseLeave = { this.handleClose }
                open={ this.state.isOpen }
                eventKey={3} title="Email" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Send Email</MenuItem>
                <MenuItem eventKey={3.2}>Create Template</MenuItem>
                <MenuItem eventKey={3.3}>View Labels</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Get Recent Email</MenuItem>
              </NavDropdown>
            </Nav>
            
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
          <li key="3"><a href="/surveys">Email Campaigns</a></li>
          <li key="4"><a href="/listats">LinkedIn Stats</a></li>
          <li key="5"><a href="/gastats">GA Stats</a></li>
          <li key="6"><a href="/api/logout">Logout</a></li>

        </Nav>
        </Navbar.Collapse>
        );
    }
  }

  render() {
    return (
       <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          
                  {this.renderContent()}
          
        </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
