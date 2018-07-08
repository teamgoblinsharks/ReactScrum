import * as types from '../constants/actionTypes';
import axios from '../../node_modules/axios';

export function addTask(task) {
  console.log(task);
  return async function (dispatch, getState) {
    const state = getState();
    const taskArray = state.users.boards.tasks;

    const newTask = {
      task,
    };

    taskArray.push(newTask);

    return dispatch({
      type: types.ADD_TASK,
      taskArray,
    });
  };
}

export function addBoard(name) {
  return async function (dispatch, getState) {
    const state = getState();
    console.log(state);
    const boards = state.users.boards;

    const newBoard = {
      name: name,
    };

    boards.push(newBoard);

    return dispatch({
      type: types.ADD_BOARD,
      boards,
    });
  };
}

export function addStory() {
  return async function (dispatch, getState) {
    const state = getState();

    return dispatch({
      type: types.ADD_STORY,
      users,
    });
  };
}

export const getUsers = (dispatch, getState) => {
  axios.get('http://localhost:3000/getusers').then(res => {
    console.log(res.data[0]);
    const { users } = getState();
    return dispatch({ type: types.GET_USERS, users: res.data });
  });
};

export function isLoggedIn(id) {
  return async function (dispatch, getState) {
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
