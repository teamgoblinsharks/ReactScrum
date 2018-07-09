import * as types from '../constants/actionTypes.js';

export function addTask(name, boardId) {
  console.log('name', name);
  console.log('board id', boardId)
  return async function (dispatch, getState) {
    const state = getState();
    const tasks = state.tasks.slice();

    const newTask = {
      boardId,
      status: 'todo',
      name,
    };

    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });

    const data = await response.json();
    console.log(data);
    tasks.push(data);

    return dispatch({
      type: types.ADD_TASK,
      tasks,
    });
  };
}

export function clearTasks(tasks) {
  const newTasks = tasks.slice();
  newTasks.splice(0);

  return {
    type: types.CLEAR_TASKS,
    tasks: newTasks
  }
}

export function getTasks(boardId) {
  return async function (dispatch, getState) {
    const state = getState();
    const tasks = state.tasks.slice();

    const response = await fetch(`http://localhost:3000/tasks/id?id=${boardId}`);
    const data = await response.json();
    console.log(data);
    data.forEach(task => tasks.push(task));

    return dispatch({
      type: types.GET_TASKS,
      tasks
    });
  }
}
