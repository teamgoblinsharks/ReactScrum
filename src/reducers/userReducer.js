import * as types from '../constants/actionTypes';

const taskReducer = (state = {}, action) => {
  let boards;
  let taskArray;
  let users;

  switch (action.type) {
    case types.ADD_TASK:
      taskArray = action.taskArray;
      console.log(taskArray);

      return {
        ...state,
        taskArray,
      };

    case types.ADD_BOARD:
      boards = action.boards;

      return {
        ...state,
        boards,
      };

    case types.GET_USERS:
      users = action.users;
      console.log('got here');

      return {
        users,
      };

    default:
      return state;
  }
};

export default taskReducer;
