import axios from 'axios';
import equijoin from '../utils/equijoin';

import { FETCH_USER, 
          FETCH_SURVEYS, 
          FETCH_LI_CONNECTIONS,
          FETCH_LI_DOWNLOADS,
          FETCH_LI_TAGS } from './types';

import { GET_CONNECTIONS } from './sampleData/get_connections';
import { GET_TAGGED_CONNECTIONS } from './sampleData/get_tagged_connections';
import { GET_DOWNLOADS } from './sampleData/get_downloads';
import { GET_TAGS } from './sampleData/get_tags';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

// JSON calls for LI DATA
// Note: for SAMPLE-DATA, USE payload: res (INSTEAD OF res.data)

export const fetchLIConnections = () => async dispatch => {
  //Elisha's connections
  var res1 = axios.get('http://45.55.120.26/get_connections/5bc2231aca978bf632655324');        
  //Jason's connections (on Elisha's pc)
  var res2 = axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  //Elisha's tagged connections
  var res3 = axios.get('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5bc2231aca978bf632655324');
  //Jason's tagged connections
  var res4 = axios.get('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5b3b0f2b126f883d076adb1d');

  Promise.all([res1, res2, res3, res4]).then(function(values) {      
      let LIConnections = values[0].data.conns.concat(values[1].data.conns);
      let LITaggedConnections =  values[2].data.concat(values[3].data);
      //debugger
      console.log('LIConnections',LIConnections);
      console.log('LITaggedConnections',LITaggedConnections);
       console.log('LIConnections',LIConnections);
       console.log('equijoin: ',equijoin)

      let newConnectionList = equijoin(LIConnections, LITaggedConnections, "c_public_id", "connection_id",
      ({c_name, c_profile_url, c_public_id, is_accepted, invitation_message, follow_up_message, date_conn_sent}, {tags, id}) => ({c_name, c_profile_url, c_public_id, is_accepted, invitation_message, follow_up_message, date_conn_sent, tags, id}));

      console.log('newConnectionList: ',newConnectionList)

      dispatch({ type: FETCH_LI_CONNECTIONS, payload: newConnectionList});
  })
};



export const fetchLIDownloads = () => async dispatch => {

  // const res = GET_DOWNLOADS;
  // dispatch({ type: FETCH_LI_DOWNLOADS, payload: res.data});
};


export const fetchLITags = () => async dispatch => {
  //Elisha's tags
  const res1 = axios.get('http://45.55.120.26/get_tags/?user_id=5bc2231aca978bf632655324');
  //Jason's tags
  const res2 = axios.get('http://45.55.120.26/get_tags/?user_id=5b3b0f2b126f883d076adb1d');

  Promise.all([res1, res2]).then(function(values) {
      
      const arr3 = values[0].data.tags.concat(values[1].data.tags);
      dispatch({ type: FETCH_LI_TAGS, payload: arr3});
  })

};

