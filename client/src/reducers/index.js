import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import LIConnectionsReducer from './LIConnectionsReducer';
import LITaggedConnectionsReducer from './LITaggedConnectionsReducer';
import LIDownloadsReducer from './LIDownloadsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  LIConnections: LIConnectionsReducer,
  LITaggedConnections: LITaggedConnectionsReducer,
  LIDownloads: LIDownloadsReducer
});
