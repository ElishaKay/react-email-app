import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLIConnections } from '../../actions';

class ConnectionList extends Component {

  componentWillMount() {
    this.props.fetchLIConnections();

    // Example: http://localhost:3000/listats/leads/VP-Sales-US-51-200
    
    //idea - pass the campaign name to a filter function (if you alredy have the connections list)
    // or pass the campaign name to an action which will return the filtered list of connections 
    // (from Leonard API)
    console.log('this.props.match.params.campaign',this.props.match.params.campaign)
  }

  renderConnections() {
    //filter connections by campaign
    let filteredConnections = this.props.LIConnections.filter(val => {
      return val.tags === this.props.match.params.campaign;
    });

    console.log('filteredConnections: ',filteredConnections);

    return filteredConnections.sort(function(a,b){
      return (a.is_accepted === b.is_accepted) ? 0 : a ? -1 : 1;
        }).map(connection => {
          return (
            <div className="card darken-1" key={connection.id}>
              <div className="card-content">
                <span className="card-title">{connection.c_name}</span>
                <p>
                   Invite Message: {connection.invitation_message}
                </p>
                <p className="right">
                  Sent On: {new Date(connection.date_conn_sent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Accepted: {connection.is_accepted}</a>         
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

function mapStateToProps({LIConnections}) {
  return { LIConnections };
}

export default connect(mapStateToProps, { fetchLIConnections })(ConnectionList);
