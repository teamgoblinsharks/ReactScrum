import { combineReducers } from 'redux';

// import all reducers here
import taskReducer from './taskReducer';

// combine reducers
const reducers = combineReducers({
   // if we had other reducers, they would go here
   tasks: taskReducer,
});

// make the combined reducers available for import
export default reducers;