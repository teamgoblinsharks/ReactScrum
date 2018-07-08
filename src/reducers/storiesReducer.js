import * as types from '../constants/actionTypes';

const initialState = [
  {
    _id: 1,
    boardID: 1,
    name: 'user can log in',
    tasks: [1.0, 1.01, 1.02],
  },
  {
    _id: 2,
    boardID: 1,
    name: 'user can play a game',
  },
  {
    _id: 3,
    boardID: 1,
    name: 'user can change profile info',
  },
  {
    _id: 4,
    boardID: 2,
    name: 'user can create a business plan',
  },
  {
    _id: 5,
    boardID: 2,
    name: 'user can look at stock prices',
  },
  {
    _id: 6,
    boardID: 2,
    name: 'user can transfer funds',
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
