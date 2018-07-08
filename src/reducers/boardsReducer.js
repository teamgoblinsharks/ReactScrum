import * as types from '../constants/actionTypes';

const initialState = [
  {
    _id: 1,
    name: 'final project',
  },
  {
    _id: 2,
    name: 'work plan',
  },
];

export default (state = initialState, action) => {
  let boards;
  switch (action.type) {
    case types.ADD_BOARD:
      boards = action.boards;
      return boards;
    default:
      return state;
  }
};
