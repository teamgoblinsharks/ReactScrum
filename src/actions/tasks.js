import * as types from '../constants/actionTypes.js';

export function addTask(task) {
  console.log(task);
  return async function (dispatch, getState) {
    const state = getState();
    const tasks = state.tasks.slice();
    const newTask = {
      task,
      position: 'todo',
    };

    tasks.push(newTask);
    console.log('tasks after push', tasks);

    return dispatch({
      type: types.ADD_TASK,
      tasks,
    });
  };
}
