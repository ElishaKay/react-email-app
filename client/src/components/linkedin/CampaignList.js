import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLIConnections } from '../../actions';

class CampaignList extends Component {
  componentWillMount() {
    //
  }

  renderCampaigns() {
    return this.props.campaignStats.map(campaign => {
          return (
            <div className="card darken-1" key={campaign.id}>
              <div className="card-content">
                <span className="card-title">{}</span>
                <p>
                   Invite Message: {}
                </p>
                <p className="right">
                  Sent On: {}
                </p>
              </div>
              <div className="card-action">
                <a>Accepted: {}</a>         
              </div>
            </div>
          );
        });
  }

  render() {
    return (
      <div>
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignList;
