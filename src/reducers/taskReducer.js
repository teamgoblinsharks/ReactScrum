import * as types from '../constants/actionTypes';

const initialState = {
  boards: [],
  taskArray: [],
};

const taskReducer = (state = initialState, action) => {
  let boards;
  let taskArray;

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

    default:
      return initialState;
  }
};

export default taskReducer;
