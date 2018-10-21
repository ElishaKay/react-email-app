import { FETCH_LI_DOWNLOADS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LI_DOWNLOADS:
      console.log('action.payload in LIDOWNLOADReducer: ',action.payload);
      return action.payload;
    default:
      return state;
  }
}
