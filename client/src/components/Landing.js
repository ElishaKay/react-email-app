import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <Link to='/surveys'>
          <button className="btn">
              View Dashboard
          </button>
          </Link>
        );
    }
  }

  render() {
    return (
       <div style={{ textAlign: 'center' }}>
       <h5>Send emails to known Crowd Funders</h5>
	      <ul>
	        <li>Login with Google</li>
          <li>Purchase Credits with Stripe</li>
          <li>Create Email Campaigns</li>
          <li>View Campaign Metrics</li>
	      </ul>
	      
		  	{this.renderContent()}
	   </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
