import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_STORY:
      return state.slice().concat(action.story);
    default:
      return state;
  }
};
