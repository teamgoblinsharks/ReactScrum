import * as types from '../constants/actionTypes';

const initialState = [
  { _id: 1, boardID: 1, status: 'todo', name: 'add the red button' },
  { _id: 2, boardID: 1, status: 'todo', name: 'add the blue button' },
  { _id: 3, boardID: 1, status: 'todo', name: 'add the green button' },
  { _id: 4, boardID: 1, status: 'todo', name: 'remove the black button' },
  { _id: 5, boardID: 1, status: 'todo', name: 'remove the silver button' },
  { _id: 6, boardID: 1, status: 'todo', name: 'remove the gold button' },
  { _id: 7, boardID: 1, status: 'todo', name: 'change the orange button' },
  { _id: 8, boardID: 1, status: 'todo', name: 'change the purple button' },
  { _id: 9, boardID: 1, status: 'todo', name: 'change the other button' },
  { _id: 10, boardID: 2, status: 'todo', name: 'add the expensive stuff' },
  { _id: 11, boardID: 2, status: 'todo', name: 'add the cheap stuff' },
  { _id: 12, boardID: 2, status: 'todo', name: 'add the deferred stuff' },
  { _id: 13, boardID: 2, status: 'todo', name: 'remove the stocks button' },
  { _id: 14, boardID: 2, status: 'todo', name: 'remove the bonds button' },
  { _id: 15, boardID: 2, status: 'todo', name: 'remove the account button' },
  { _id: 16, boardID: 2, status: 'todo', name: 'change the portfolio button' },
  { _id: 17, boardID: 2, status: 'todo', name: 'change the divestment button' },
  { _id: 18, boardID: 2, status: 'todo', name: 'change the investment button' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return action.tasks;
    case action.UPDATE_TASK: {
      return action.tasks;
    }
    default:
      return state;
  }
};
