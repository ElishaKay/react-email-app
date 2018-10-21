import axios from 'axios';
import { FETCH_USER, 
          FETCH_SURVEYS, 

          FETCH_LI_CONNECTIONS, 
          FETCH_LI_TAGGED_CONNECTIONS,
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

export const fetchLIConnections = () => async dispatch => {
  // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
  const res = GET_CONNECTIONS;
  dispatch({ type: FETCH_LI_CONNECTIONS, payload: res});
};

export const fetchLITaggedConnections = () => async dispatch => {
  // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
  const res = GET_TAGGED_CONNECTIONS;
  dispatch({ type: FETCH_LI_TAGGED_CONNECTIONS, payload: res});
};

export const fetchLIDownloads = () => async dispatch => {
  // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
  const res = GET_DOWNLOADS;
  dispatch({ type: FETCH_LI_DOWNLOADS, payload: res});
};

export const fetchLITags = () => async dispatch => {
  // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
  const res = GET_TAGS;
  dispatch({ type: FETCH_LI_TAGS, payload: res});
};





// export const fetchLICampaigns = () => async dispatch => {
//   // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
//   // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
//   const connections = GET_CONNECTIONS;
//   const tagged_connections = GET_TAGGED_CONNECTIONS;

//   const elishaTaggedConns = equijoin(values[0].conns, values[2], "c_public_id", "connection_id",
//     ({c_name, is_accepted}, {tags}) => ({c_name,is_accepted, tags}));

//   console.log('res in actions index file: ', res)
//   dispatch({ type: FETCH_LI_CONNECTIONS, payload: res});
// };

