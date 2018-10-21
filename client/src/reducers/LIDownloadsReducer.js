import { FETCH_LI_DOWNLOADS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LI_DOWNLOADS:
      return action.payload;
    default:
      return state;
  }
}
