import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="task" id="taskInput" />
        <button onClick={() => this.props.addTask(document.querySelector('#taskInput').value)}>
          Add Task
        </button>
      </div>
    );
  }
}

export default AddTask;
