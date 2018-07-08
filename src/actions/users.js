import axios from 'axios';
import * as types from '../constants/actionTypes.js';

export function getUsers() {
  return async function(dispatch, getState) {
    axios.get('http://localhost:3000/getusers').then(res => {
      const { users } = getState();
      return dispatch({ type: types.GET_USERS, users: res.data });
    });
  };
}

export function isLoggedIn(id) {
  return async function(dispatch, getState) {
    const state = getState();
    const users = state.users;

    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === id) {
        users[i].isLoggedIn = true;
      }
    }

    return dispatch({
      type: types.IS_LOGGED_IN,
      users,
    });
  };
}
