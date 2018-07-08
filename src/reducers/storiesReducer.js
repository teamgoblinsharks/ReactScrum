import * as types from '../constants/actionTypes';

const initialState = [
  {
    _id: 1,
    boardID: 1,
    name: 'user can log in',
    tasks: [1.0, 1.01, 1.02],
  },
  {
    _id: 1.1,
    boardID: 1,
    name: 'user can play a game',
    tasks: [1.1, 1.11, 1.12],
  },
  {
    _id: 1.2,
    boardID: 1,
    name: 'user can change profile info',
    tasks: [1.2, 1.21, 1.22],
  },
  {
    _id: 2,
    boardID: 2,
    name: 'user can create a business plan',
    tasks: [2.0, 2.01, 2.02],
  },
  {
    _id: 2.1,
    boardID: 2,
    name: 'user can look at stock prices',
    tasks: [2.1, 2.11, 2.12],
  },
  {
    _id: 2.2,
    boardID: 2,
    name: 'user can transfer funds',
    tasks: [2.2, 2.21, 2.22],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_STORY:
      return state.slice().concat(action.story);
    default:
      return state;
  }
};
