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
                <span className="card-title">{campaign.tag_name}</span>
                <p>
                   Total Amount of Invites Sent: {campaign.totalInvitesSent}
                </p>
                <p className="right">
                  Total Amount of Invites Accepted: {campaign.totalInvitesAccepted}
                </p>
              </div>
              <div className="card-action">
                <a>Acceptance Rate:  
                  {Math.floor((campaign.totalInvitesAccepted/campaign.totalInvitesSent) * 100)+'%'}</a>         
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
