import React, { Component } from 'react';
import AddTask from './AddTask.jsx';
import AddStory from './AddStory.jsx';
import AddBoard from './AddBoard.jsx';
import Row from './Row.jsx';
import * as boardActions from '../actions/boards.js';
import * as taskActions from '../actions/tasks.js';
import * as storyActions from '../actions/stories.js';

import { connect } from 'react-redux';
import '../styles/styles.scss';

const mapDispatchToProps = dispatch => {
  return {
    addBoard: name => dispatch(boardActions.addBoard(name)),
    addTask: task => dispatch(taskActions.addTask(task)),
    addStory: story => dispatch(storyActions.addStory(story)),
  };
};

const mapStateToProps = store => {
  return {
    boards: store.boards,
  };
};

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        <h1 className="board-title">Board Name</h1>
        <AddBoard addBoard={this.props.addBoard} />
        <div>
          <AddTask addTask={this.props.addTask} />
          <AddStory addStory={this.props.addStory} />
        </div>
        <div>
          <Row />
        </div>
        <div>{this.props.match.params.id}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
