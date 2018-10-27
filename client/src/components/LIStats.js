import React, { Component } from 'react';
import equijoin from '../utils/equijoin';

import { connect } from 'react-redux';
import { fetchLIDownloads, 
          fetchLIConnections,
          fetchLITaggedConnections,
          fetchLITags } from '../actions';

import CampaignList from './linkedin/CampaignList';
import Chart from './linkedin/Chart';
import ConnectionList from './linkedin/ConnectionList';

class LIStats extends Component {

  componentWillMount(){
    this.props.fetchLITags();
    this.props.fetchLIDownloads();
    this.props.fetchLIConnections();
    this.props.fetchLITaggedConnections();
  }

  render() {
    let {LIDownloads, LIConnections, LITaggedConnections, LITags} = this.props;
    let campaignStats = [];

    if(LIConnections.length != 0 && LITaggedConnections.length != 0 && 
        LITags.length != 0){ 
          console.log('LIConnections in LIStats: ',LIConnections);
          console.log('LITaggedConnections in LIStats: ',LITaggedConnections);

          const campaignStats = equijoin(LIConnections, LITaggedConnections, "c_public_id", "connection_id",
          ({c_name, is_accepted}, {tags, id}) => ({c_name,is_accepted, tags, id}));

          console.log('campaignStats',campaignStats);

          for (let i = 0; i < LITags.length; i++) {
              LITags[i].totalInvitesSent=0;
              LITags[i].totalInvitesAccepted=0;
              LITags[i].totalEngaged=0;

              for (let j = 0; j < campaignStats.length; j++) { 
                  if(LITags[i].tag_name==campaignStats[j].tags){
                    LITags[i].totalInvitesSent++;
                    //check acceptance rate
                    if(campaignStats[j].is_accepted=='true' || campaignStats[j].is_accepted=='engaged'){
                      LITags[i].totalInvitesAccepted++;
                    }
                    if(campaignStats[j].is_accepted=='engaged') {
                      LITags[i].totalEngaged++;
                    }
                  }
              }
          }

          console.log('LITags: ',LITags);
    }

    return (
      <div className="App">
        <div className="App-header"> 
            <h2>Your LinkedIn Campaigns</h2>
              <CampaignList campaignStats={LITags}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({LIDownloads, LIConnections, LITaggedConnections, LITags }) {
  return { LIDownloads, LIConnections, LITaggedConnections, LITags };
}

export default connect(mapStateToProps, 
  { fetchLIDownloads, 
  fetchLITags, 
  fetchLIConnections, 
  fetchLITaggedConnections })(LIStats);
