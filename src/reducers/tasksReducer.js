import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return action.tasks;
    default:
      return state;
  }
};
