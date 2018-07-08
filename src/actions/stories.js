import * as types from '../constants/actionTypes';

export function addStory(story) {
  console.log(story);
  return async function(dispatch, getState) {
    const state = getState();
    const newStory = {
      name: story,
    };
    return dispatch({
      type: types.ADD_STORY,
      story: newStory,
    });
  };
}
