import React, { Component } from 'react';
import AddTask from './AddTask.jsx';
import AddStory from './AddStory.jsx';
import AddBoard from './AddBoard.jsx';
import Row from './Row.jsx';
import * as actions from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addBoard: (name) => dispatch(actions.addBoard(name)),
    addTask: (task) => dispatch(actions.addTask(task)),
  }
}

const mapStateToProps = store => {
  return {
    boards: store.tasks.boards,

  }
}

class Board extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div>
        <AddBoard addBoard={this.props.addBoard} />
        <div>
          <AddTask addTask={this.props.addTask} />
        </div>
        <div><AddStory /></div>
        <div><Row /></div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);