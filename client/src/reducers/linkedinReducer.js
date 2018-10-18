import { FETCH_LI_CONNECTIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LI_CONNECTIONS:
      console.log('action.payload in linkedinReducer: ',action.payload);
      return action.payload;
    default:
      return state;
  }
}
