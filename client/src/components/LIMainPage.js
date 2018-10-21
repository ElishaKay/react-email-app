// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLIConnections } from '../actions';

import ConnectionList from './linkedin/ConnectionList';
import Chart from './linkedin/Chart';

class LIMainPage extends Component {
  componentWillMount() {
    this.props.fetchLIConnections();
    this.setState({ currentPage: 'Chart' });
  }

  renderContent() {
    let { linkedin } = this.props; 
    console.log('this.props in LIMainPage: ',this.props);

    if (this.state.currentPage === 'Chart') {
      return (
        <Chart />
      );
    }

    return (
      <ConnectionList linkedin={linkedin} />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({linkedin}) {
  return { linkedin };
}

export default connect(mapStateToProps, { fetchLIConnections })(LIMainPage);
