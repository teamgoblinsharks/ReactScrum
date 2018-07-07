import * as types from "../constants/actionTypes";

export function addTask(task) {
   console.log(task);
   return async function (dispatch, getState) {
      const state = getState();
      const taskArray = state.tasks.taskArray;

      const newTask = {
         task
      }

      taskArray.push(newTask);

      return dispatch({
         type: types.ADD_TASK,
         taskArray
      })
   }
}

export function addBoard(name) {

   return async function (dispatch, getState) {
      const state = getState();
      console.log(state);
      const boards = state.tasks.boards;

      const newBoard = {
         name: name
      }

      boards.push(newBoard);


      return dispatch({
         type: types.ADD_BOARD,
         boards
      })
   }

}