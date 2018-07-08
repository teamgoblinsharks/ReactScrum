import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let users;
  switch (action.type) {
    case types.GET_USERS:
      users = action.users;
      return users;
    case types.IS_LOGGED_IN:
      users = action.users;

      return {
        users,
      };
    default:
      return state;
  }
};
