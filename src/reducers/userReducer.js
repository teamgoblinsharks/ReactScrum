import * as types from '../constants/actionTypes';

const dummyUser = {
  _id: 1234,
  name: 'erikguntner',
  isLoggedIn: true,
  oAuthInfo: {},
  boards: [
    {
      _id: 4567,
      name: 'myboard',
      stories: [
        {
          _id: 987,
          story: "The user should be able to use the app"
        }
      ],
      tasks: [
        {
          _id: 678,
          task: 'finish scrumboard'
        }
      ]
    }
  ]
}

const taskReducer = (state = { users: [dummyUser] }, action) => {
  let boards;
  let taskArray;
  let users;

  switch (action.type) {
    case types.ADD_TASK:
      taskArray = action.taskArray;
      console.log(taskArray);

      return {
        ...state,
        taskArray,
      };

    case types.ADD_BOARD:
      boards = action.boards;

      return {
        ...state,
        boards,
      };

    case types.GET_USERS:
      users = action.users

      return {
        users
      }

    case types.IS_LOGGED_IN:
      users = action.users

      return {
        users
      }

    case types.ADD_STORY:
      users = action.users

      return {
        users
      }

    default:
      return state;
  }

};

export default taskReducer;
