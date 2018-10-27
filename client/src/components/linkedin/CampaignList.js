import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                   Content Goes Here
                </p>
                  <p className="right">
                  Invites Sent: {campaign.totalInvitesSent}
                  </p><br />
                  <p className="right">
                  Invites Accepted: {campaign.totalInvitesAccepted}
                  </p><br />
                  <p className="right">
                  Leads That Responded: {campaign.totalEngaged}
                  </p>
              </div>
              <div className="card-action">
                <a>Acceptance Rate:  
                  {Math.floor((campaign.totalInvitesAccepted/campaign.totalInvitesSent) * 100)+'%'}</a>         
              </div>
              <Link className="right" to={`/listats/leads/${campaign.tag_name}`} className="btn btn-info">
                View Leads
              </Link>
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
