// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLIConnections } from '../../actions';

import ConnectionList from './ConnectionList';
import Chart from './Chart';

class LIMainPage extends Component {
  componentWillMount() {
    this.props.fetchLIConnections();
    this.setState({ currentPage: 'Chart' });
  }

  renderContent() {
    if (this.state.currentPage === 'Chart') {
      return (
        <Chart />
      );
    }

    return (
      <ConnectionList />
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
