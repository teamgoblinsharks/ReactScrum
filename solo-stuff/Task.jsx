import React from 'react';
import { connect } from 'react-redux';

import { updateTask, deleteTask } from '../src/actions/tasks.js';

const Task = props => {
  const order = ['todo', 'inProgress', 'testing', 'done'];
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '2px 2px 2px',
        padding: '4px 4px 4px',
      }}
    >
      <p>
        {props.name} <button onClick={() => props.deleteTask(props.task._id)}>X</button>
      </p>
      <span
        onClick={() => {
          const { status } = props.task;
          const newStatus = order[order.indexOf(status) === 0 ? 0 : order.indexOf(status) - 1];
          props.updateTask(props.task, { status: newStatus });
        }}
      >
        Move Left
      </span>
      <span 
        onClick={() => {
          const { status } = props.task;
          const newStatus =
            order[
              order.indexOf(status) === order.length - 1
                ? order.length - 1
                : order.indexOf(status) + 1
            ];
          props.updateTask(props.task, { status: newStatus });
        }}
      >
        Move Right
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: (task, updates) => dispatch(updateTask(task, updates)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Task);
