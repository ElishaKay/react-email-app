import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_LI_CONNECTIONS, FETCH_LI_DOWNLOADS } from './types';
import { GET_CONNECTIONS } from './sampleData/get_connections';
import { GET_DOWNLOADS } from './sampleData/get_downloads';

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

  console.log('res in actions index file: ', res)
  dispatch({ type: FETCH_LI_CONNECTIONS, payload: res});
};

export const fetchLIDownloads = () => async dispatch => {
  // const res = await axios.get('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');
  // dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
  
  const res = GET_DOWNLOADS;

  console.log('res in fetchLIDownloads in actions index file: ', res)
  dispatch({ type: FETCH_LI_DOWNLOADS, payload: res});
};
