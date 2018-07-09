import React, { Component } from 'react';
import Task from './Task.jsx';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    this.setState({ tasks: this.props.tasks });
  }
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ tasks: nextProps.tasks }));
  }

  render() {
    // const filteredTasks = this.props.tasks.filter(task => task.boardId === this.props.boardId);
    console.log('====================================');
    console.log('rowbody state tasks', this.state.tasks);
    console.log('====================================');
    const tasks = this.state.tasks
      ? this.state.tasks.map(task => (
          <Task
            task={task}
            name={task.name}
            key={Math.random()}
            columnHeader={this.props.columnHeader}
          />
        ))
      : [];
    return <div>{tasks}</div>;
  }
}

export default Body;
