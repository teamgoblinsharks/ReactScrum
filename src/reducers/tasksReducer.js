import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let tasks;
  switch (action.type) {
    case types.ADD_TASK:
      tasks = action.tasks;

      return tasks;

    case types.GET_TASKS:
      tasks = action.tasks;

      return tasks;

    case types.CLEAR_TASKS:
      tasks = action.tasks;

      return tasks;

    case types.UPDATE_TASK:
      return action.tasks;

    default:
      return state;
  }
};
