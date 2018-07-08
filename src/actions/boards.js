import * as types from '../constants/actionTypes.js';

export function addBoard(name) {
  return async function (dispatch, getState) {
    const state = getState();
    const boards = state.boards.slice();
      
    const newBoard = {
      id: 'abc',
      name,
    };

    const response = await fetch('http://localhost:3000/boards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBoard)
    });

    const data = await response.json();

    boards.push(data);

    return dispatch({
      type: types.ADD_BOARD,
      boards,
    });
  };
}
