import React, { Component } from 'react';
import Iframe from 'react-iframe'

class GAStats extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    // this.getChartData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Iframe 
            width="100%" 
            height="1800"
            position="relative"
            id="myId" 
            url="https://datastudio.google.com/embed/reporting/1gw3zdIwLYkuVgDI-t2opw0mwxAj_ASKN/page/8XQa" 
            frameborder="0" 
            style="border:0"
            display="initial"
            allowfullscreen/>
        </div>
      </div>
    );
  }
}

export default GAStats;
