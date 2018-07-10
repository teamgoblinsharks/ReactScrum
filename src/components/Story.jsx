import React from 'react';
import { connect } from 'react-redux';

import { updateStory, deleteStory } from '../actions/stories.js';

const Task = props => {
  const order = ['todo', 'inProgress', 'testing', 'done'];
  return (
    <div
      style={{
        border: '2.5px solid black',
        padding: '4px 4px',
        backgroundColor: props.task.done ? 'green' : 'red',
        marginTop: '2px',
        marginBottom: '2px',
      }}
    >
      <button
        className="delete button_clear--small"
        onClick={() => props.deleteTask(props.task._id)}
      >
        X
      </button>
      <p>{props.name}</p>
      <span
        onClick={() => {
          let { done } = props.task;
          console.log('​done', done);
          props.updateStory(props.task, { done: !done });
        }}
      >
        Status
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
