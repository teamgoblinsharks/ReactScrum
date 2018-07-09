import React from 'react';
import { connect } from 'react-redux';

import { updateStory, deleteStory } from '../src/actions/stories.js';

const Task = props => {
  const order = ['todo', 'inProgress', 'testing', 'done'];
  return (
    <div
      style={{
        border: '1px solid black',
      }}
    >
      <p>
        {props.name} <button onClick={() => props.deleteTask(props.task._id)}>X</button>
      </p>
      <span
        onClick={() => {
          let { done } = props.task;
          console.log('​done', done);
          props.updateStory(props.task, { done: !done });
        }}
      >
        Toggle
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateStory: (task, updates) => dispatch(updateStory(task, updates)),
  deleteTask: taskId => dispatch(deleteStory(taskId)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Task);
