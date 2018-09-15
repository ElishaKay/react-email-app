import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <Link to='/surveys'>
		      <button className="btn">
		          View Dashboard
		      </button>
      	  </Link>
        );
      case false:
        return;
      default:
        return;
    }
  }

  render() {
    return (
       <div style={{ textAlign: 'center' }}>
	      <h1>
	        Emaily!
	      </h1>
	      <p>Send emails to known Crowd Funders</p>
		  	{this.renderContent()}
	   </div>
    );
  }
}

export default Landing;