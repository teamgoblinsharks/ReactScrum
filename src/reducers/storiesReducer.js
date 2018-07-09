import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let stores;
  switch (action.type) {
    case types.ADD_STORY:

      return stories
    default:
      return state;
  }
};
