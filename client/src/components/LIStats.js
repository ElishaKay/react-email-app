import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchLIDownloads, 
          fetchLIConnections,
          fetchLITags } from '../actions';

import CampaignList from './linkedin/CampaignList';
import Chart from './linkedin/Chart';
import ConnectionList from './linkedin/ConnectionList';

class LIStats extends Component {

  componentWillMount(){
    this.props.fetchLITags();
    this.props.fetchLIDownloads();
    this.props.fetchLIConnections();
  }

  render() {
    let {LIDownloads, LIConnections, LITags} = this.props;

    if(LIConnections.length != 0 && 
        LITags.length != 0){ 
          console.log('LIConnections in LIStats: ',LIConnections);

          for (let i = 0; i < LITags.length; i++) {
              LITags[i].totalInvitesSent=0;
              LITags[i].totalInvitesAccepted=0;
              LITags[i].totalEngaged=0;

              for (let j = 0; j < LIConnections.length; j++) { 
                  if(LITags[i].tag_name==LIConnections[j].tags){
                    LITags[i].totalInvitesSent++;
                    //check acceptance rate
                    if(LIConnections[j].is_accepted=='true' || LIConnections[j].is_accepted=='engaged'){
                      LITags[i].totalInvitesAccepted++;
                    }
                    if(LIConnections[j].is_accepted=='engaged') {
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

function mapStateToProps({LIDownloads, LIConnections, LITags }) {
  return { LIDownloads, LIConnections, LITags };
}

export default connect(mapStateToProps, 
  { fetchLIDownloads, 
  fetchLITags, 
  fetchLIConnections })(LIStats);


