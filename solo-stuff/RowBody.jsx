import React, { Component } from 'react';
import Task from './Task.jsx';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks: [],
    };
  }
  componentDidMount() {
    // this.setState({ tasks: this.props.tasks });
  }
  componentWillReceiveProps(nextProps) {
    // this.setState(() => ({ tasks: nextProps.tasks }));
  }

  render() {
    const filteredTasks = this.props.tasks.filter(task => task.boardId === this.props.boardId);

    const tasks = filteredTasks.map(task => (
      <Task name={task.name} key={Math.random()} columnHeader={this.props.columnHeader} />
    ));
    return (
      <div>
        tasks
        {tasks}
      </div>
    );
  }
}

export default Body;
