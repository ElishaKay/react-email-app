import React, { Component } from 'react';
import equijoin from '../utils/equijoin';

import { connect } from 'react-redux';
import { fetchLIDownloads, 
          fetchLIConnections,
          fetchLITaggedConnections } from '../actions';

import Chart from './linkedin/Chart';
import ConnectionList from './linkedin/ConnectionList';

class LIStats extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.props.fetchLIDownloads();
    this.props.fetchLIConnections();
    this.props.fetchLITaggedConnections();

    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    let {LIDownloads, LIConnections, LITaggedConnections} = this.props;

    if(LIConnections.length != 0 && LITaggedConnections.length != 0){ 
      console.log('LIConnections in LIStats: ',LIConnections);
      console.log('LITaggedConnections in LIStats: ',LITaggedConnections);
    }
     
    // <ConnectionList />
    // <CampaignList />

    return (
      <div className="App">

        <div className="App-header"> 
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

function mapStateToProps({LIDownloads, LIConnections, LITaggedConnections }) {
  return { LIDownloads, LIConnections, LITaggedConnections };
}

export default connect(mapStateToProps, 
  { fetchLIDownloads, 
  fetchLIConnections, 
  fetchLITaggedConnections })(LIStats);
