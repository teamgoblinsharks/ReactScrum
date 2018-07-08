import * as types from '../constants/actionTypes';

const initialState = [
  {
    _id: 1,
    name: 'final project',
    stories: [1, 1.1, 1.2],
    tasks: [1.0, 1.01, 1.02, 1.1, 1.11, 1.12, 1.2, 1.21, 1.22],
  },
  {
    _id: 2,
    name: 'work plan',
    stories: [2, 2.1, 2.2],
    tasks: [2.0, 2.01, 2.02, 2.1, 2.11, 2.12, 2.2, 2.21, 2.22],
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
