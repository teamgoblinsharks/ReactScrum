import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let boards;
  switch (action.type) {
    case types.ADD_BOARD:
      boards = action.boards;
      console.log(boards);
      return boards;
    default:
      return state;
  }
};
