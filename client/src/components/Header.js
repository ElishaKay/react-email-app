import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/surveys">Email Campaigns</a></li>,
          <li key="4"><a href="/listats">LinkedIn Stats</a></li>,
          <li key="5"><a href="/gastats">GA Stats</a></li>,
          <li key="6"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Crowd-It!
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
