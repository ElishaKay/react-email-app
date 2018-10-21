import React, { Component } from 'react';

class ConnectionList extends Component {
  
  renderConnections() {
    return this.props.linkedin.sort(function(a,b){
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

export default ConnectionList;
