import React from 'react';
import { connect } from 'react-redux';

import { updateTask } from '../src/actions/tasks.js';

const Task = props => {
  const order = ['todo', 'inProgress', 'testing', 'done'];
  return (
    <div
      style={{
        border: '1px solid black',
      }}
      onClick={() => props.updateTask(props.task, { status: 'done' })}
    >
      <p>{props.name}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: (task, updates) => dispatch(updateTask(task, updates)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Task);
