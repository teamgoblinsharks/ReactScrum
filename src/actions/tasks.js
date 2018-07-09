import * as types from '../constants/actionTypes.js';

export function addTask(task) {
  return async function(dispatch, getState) {
    const tasks = getState().tasks.concat({ task, status: 'todo' });
    return dispatch({
      type: types.ADD_TASK,
      tasks,
    });
  };
}
/// new stuff
export const updateTask = (task, updates) => {
  return async function(dispatch, getState) {
    const updatedTask = {
      ...task,
      ...updates,
    };
    const tasks = getState()
      .tasks.filter(x => x._id !== task._id)
      .concat(updatedTask);
    return dispatch({
      type: types.UPDATE_TASK,
      tasks,
    });
  };
};
