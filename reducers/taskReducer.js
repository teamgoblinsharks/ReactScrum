import * as types from "../constants/actionTypes";

const initialState = {
  boards: [],
};

const taskReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_TASK:

      return {
        ...state,
      }

    default:
      return initialState;
  }
}

export default taskReducer;