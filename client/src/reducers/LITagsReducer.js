import { FETCH_LI_TAGS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LI_TAGS:
      return action.payload.tags;
    default:
      return state;
  }
}
