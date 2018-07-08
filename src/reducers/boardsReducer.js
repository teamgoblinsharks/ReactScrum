import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let boards;
  switch (action.type) {
    case types.ADD_BOARD:
      boards = action.boards;
      console.log('Add Board', boards);
      return boards;

    case types.GET_BOARDS:
      boards = action.boards
      console.log('Get Boards', boards);
      return boards;
    default:
      return state;
  }
};
