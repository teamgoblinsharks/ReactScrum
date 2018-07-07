import React, { Component } from 'react';
import AddTask from './AddTask.jsx';
import AddStory from './AddStory.jsx';
import Row from './Row.jsx';

class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Board
        <div>
          <AddTask />
        </div>
        <div><AddStory /></div>
        <div><Row /></div>
      </div>
    )
  }
}

export default Board;