import React from 'react';
import Row from './Row.jsx';
import * as taskActions from '../src/actions/tasks.js';
import * as storyActions from '../src/actions/stories.js';

import { connect } from 'react-redux';
// import tasksReducer from '../src/reducers/tasksReducer';

const mapDispatchToProps = dispatch => {
  return {
    addTask: (name, boardId) => dispatch(taskActions.addTask(name, boardId)),
    getTasks: (boardId) => dispatch(taskActions.getTasks(boardId)),
    clearTasks: (tasks) => dispatch(taskActions.clearTasks(tasks)),
    addStory: (name, boardId) => dispatch(storyActions.addStory(name, boardId)),
    getStories: (boardId) => dispatch(storyActions.getStories(boardId)),
    clearStories: (stories) => dispatch(storyActions.clearStories(stories))
  };
};

const mapStateToProps = store => {
  return {
    tasks: store.tasks,
    stories: store.stories
  };
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);


    this.state = {
      // order: ['todo', 'inProgress', 'testing', 'done'],
      taskValue: '',
      storyValue: '',
      // stories: [{ name: 'user will something' }],
      // todo: [],
      inProgress: [{ name: 'im in progress', status: 'inProgress' }],
      testing: [{ name: 'test that button', status: 'testing' }],
      done: [{ name: 'woooooo!', status: 'done' }],
    };
  }

  componentWillMount() {
    this.props.clearStories(this.props.stories);
    this.props.clearTasks(this.props.tasks);
  }

  componentDidMount() {
    this.props.getStories(this.props.match.params.id);
    this.props.getTasks(this.props.match.params.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.value.trim()) {
    //   const todo = this.state.todo
    //     .slice()
    //     .concat({ name: this.state.value.trim(), status: 'todo' });
    //   this.setState({ value: '', todo });
    // }
  }

  moveColumn(name, status) {
    console.log('fired', name, status);
    console.log(this.state);

    // const fromColumn = this.state.filter(task => task.name !== name);
    // console.log('​Board -> moveColumn -> fromColumn', fromColumn);
    // const toColumnName = this.state.order[this.state.order.findIndex(status) + 1];
    // console.log('​Board -> moveColumn -> toColumnName', toColumnName);
    // const toColumn = this.state[toColumnName].concat({ name: name, status: toColumnName });
    // console.log('​Board -> moveColumn -> toColumn', toColumn);
    // this.setState({ status: fromColumn, toColumnName: toColumn });
  }

  handleTaskChange(e) {
    const { value } = e.target;
    this.setState({ taskValue: value });
  }

  handleStoryChange(e) {
    const { value } = e.target;
    this.setState({ storyValue: value });
  }

  render() {
    console.log(this.props);
    return (
    <div className='Board'>
      <div>
        <h1>Welcome To Your ScrumBoard</h1>
        <div>
          <h1>Build Your Board</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="project name"
              onChange={this.handleTaskChange}
              value={this.state.taskValue}
            />
            <button onClick={() => this.props.addTask(this.state.taskValue, this.props.match.params.id)}>Add New Task</button>
          </form>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="project name"
              onChange={this.handleStoryChange}
              value={this.state.storyValue}
            />
            <button onClick={() => this.props.addStory(this.state.storyValue, this.props.match.params.id)}>Add New Story</button>
          </form>
          <div className="board-rows" style={{height: '600px', weight: '800px'}}>
            <Row columnHeader="Stories" tasks={this.props.stories} boardId={this.props.match.params.id} />
            <Row columnHeader="Todos" tasks={this.props.tasks} boardId={this.props.match.params.id} />
            <Row columnHeader="In Progress" tasks={this.state.inProgress} />
            <Row columnHeader="Testing" tasks={this.state.testing} />
            <Row columnHeader="Done" tasks={this.state.done} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

