import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLIConnections } from '../../actions';

class ConnectionList extends Component {
  componentWillMount() {
    this.props.fetchLIConnections();
  }

  renderConnections() {
    return this.props.conns.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderConnections()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.conns;
}

export default connect(mapStateToProps, { fetchLIConnections })(ConnectionList);