import React from 'react';
import Row from './Row.jsx';
import { connect } from 'react-redux';

import { addStory } from '../src/actions/stories.js';
import { addTask } from '../src/actions/tasks.js';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      order: ['todo', 'inProgress', 'testing', 'done'],
      value: '',
      stories: [],
      todo: [],
      inProgress: [],
      testing: [],
      done: [],
    };
  }
  componentDidMount() {
    const [todo, inProgress, testing, done] = this.props.tasks.reduce(
      (acc, task) => {
        if (task.status === 'todo') acc[0].push(task);
        if (task.status === 'inProgress') acc[1].push(task);
        if (task.status === 'testing') acc[2].push(task);
        if (task.status === 'done') acc[3].push(task);
        return acc;
      },
      [[], [], [], []]
    );
    this.setState({ stories: this.props.stories, todo, inProgress, testing, done });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.trim()) {
      const newTodo = { name: this.state.value.trim(), status: 'todo' };
      const todo = this.state.todo.slice().concat(newTodo);
      this.setState({ value: '', todo });
    }
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <h1>Board</h1>
        <div>
          <h1>Add new Task</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="project name"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button onClick={this.handleSubmit}>Add New Task</button>
          </form>
          <div>
            <Row columnHeader="stories" tasks={this.state.stories} />
            <Row columnHeader="todos" tasks={this.state.todo} />
            <Row columnHeader="inProgress" tasks={this.state.inProgress} />
            <Row columnHeader="testing" tasks={this.state.testing} />
            <Row columnHeader="done" tasks={this.state.done} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ tasks, stories }, ownProps) => ({
  tasks: tasks.slice().filter(task => String(task.boardID) === ownProps.match.params.boardID),
  stories: stories.slice().filter(task => String(task.boardID) === ownProps.match.params.boardID),
});

const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask()),
  addStory: () => dispatch(addStory()),
});
export default connect(mapStateToProps)(Board);
