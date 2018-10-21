import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_LI_CONNECTIONS } from './types';
import { GET_CONNECTIONS } from './'

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
  const res = await axios.get('./sampleData/get_connections');

  console.log('res in actions index file: ', res)
  dispatch({ type: FETCH_LI_CONNECTIONS, payload: res.data });
};
