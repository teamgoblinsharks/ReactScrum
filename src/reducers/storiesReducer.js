import * as types from '../constants/actionTypes';

export default (state = [], action) => {
  let stories;

  switch (action.type) {
    case types.ADD_STORY:
      stories = action.stories;

      return stories;

    case types.GET_STORIES:
      stories = action.stories;

      return stories;

    case types.CLEAR_STORIES:
      stories = action.stories;

      return stories;

    default:
      return state;
  }
};
