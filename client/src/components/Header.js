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
    }.bind(this), 500);
  }

  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Link className="waves-effect waves-light btn"
                    to="/auth/google">Login With Google
                </Link>
      default:
        return (
          <Nav>
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
                  <MenuItem eventKey={3.4} href="/api/getRecentEmail">Get Recent Email</MenuItem>
                  <MenuItem eventKey={3.5}>
                    <Link
                      to="/surveys">
                    </Link>
                  </MenuItem>
            </NavDropdown>
                <NavItem eventKey={5}>
                  <Link
                    to="/listats">LinkedIn
                  </Link>
                </NavItem>
                <NavItem eventKey={6}>
                  <Link
                    to="/gastats">Google Analytics
                  </Link>
                </NavItem>
                <NavItem eventKey={7}>
                  <Link
                    to="/api/logout">Logout
                  </Link>
                </NavItem>
         </Nav>
        );
    }
  }

  render() {
    return (
       <Navbar inverse collapseOnSelect>   
        <Navbar.Collapse>
              {this.renderContent()}  
          </Navbar.Collapse>    
        </Navbar>
    )
  }
}

// <Link
//                   to={this.props.auth ? '/surveys' : '/'}
//                   className="left brand-logo"
//                 >
//                   Crowd-It!
//                 </Link>

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
