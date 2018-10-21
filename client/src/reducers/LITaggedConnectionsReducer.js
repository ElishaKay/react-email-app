

import { FETCH_LI_TAGGED_CONNECTIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LI_TAGGED_CONNECTIONS:
      console.log('action.payload in FETCH_LI_TAGGED_CONNECTIONS Reducer: ',action.payload);
      return action.payload;
    default:
      return state;
  }
}
