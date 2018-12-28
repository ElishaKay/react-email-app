import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header2 from './Header2';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import GAStats from './GAStats';
import Email from './email/Email'

import LIStats from './LIStats';
import ConnectionList from './linkedin/ConnectionList';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header2 />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            
            <Route exact path="/gastats" component={GAStats} />
            <Route path="/surveys/new" component={SurveyNew} />

            <Route exact path="/email" component={Email} />

            <Route exact path="/listats" component={LIStats} />
            <Route exact path="/listats/leads/:campaign" component={ConnectionList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
