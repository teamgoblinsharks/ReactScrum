import * as types from "../constants/actionTypes";
import axios from "../../node_modules/axios";


export function addTask(task) {
   console.log(task);
   return async function (dispatch, getState) {
      const state = getState();
      const taskArray = state.users.boards.tasks;

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
      const boards = state.users.boards;

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

export function getUsers() {

   return async function (dispatch, getState) {
      const usersFromDb = await axios('');

      return dispatch({
         type: types.GET_USERS,
         users
      })
   }
}