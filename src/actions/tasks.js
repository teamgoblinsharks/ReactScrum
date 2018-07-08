import * as types from '../constants/actionTypes.js';

export function addTask(name) {
  console.log(name);
  return async function (dispatch, getState) {
    const state = getState();
    const tasks = state.tasks.slice();
    const newTask = {
      status: 'todo',
      name,
    };

    tasks.push(newTask);
    console.log('tasks after push', tasks);

    return dispatch({
      type: types.ADD_TASK,
      tasks,
    });
  };
}
