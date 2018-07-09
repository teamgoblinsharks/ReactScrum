import React from 'react';
import { connect } from 'react-redux';

import { updateTask, deleteTask } from '../src/actions/tasks.js';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: ['todo', 'inProgress', 'testing', 'done'],
    };
  }

  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          margin: '2px 2px 2px',
        padding: '4px 4px 4px',
        }}
      >
        <p>
          {this.props.name}{' '}
          <button onClick={() => this.props.deleteTask(this.props.task._id)}>X</button>
        </p>
        <span
          onClick={() => {
            const { status } = this.props.task;
            const newStatus = this.state.order[
              this.state.order.indexOf(status) === 0 ? 0 : this.state.order.indexOf(status) - 1
            ];
            this.props.updateTask(this.props.task, { status: newStatus });
          }}
        >
          move left
        </span>
        <span
          onClick={() => {
            const { status } = this.props.task;
            const newStatus = this.state.order[
              this.state.order.indexOf(status) === this.state.order.length - 1
                ? this.state.order.length - 1
                : this.state.order.indexOf(status) + 1
            ];
            this.props.updateTask(this.props.task, { status: newStatus });
          }}
        >
          move right
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTask: (task, updates) => dispatch(updateTask(task, updates)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Task);
