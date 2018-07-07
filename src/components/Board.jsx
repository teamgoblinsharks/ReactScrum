import React, { Component } from 'react';
import AddTask from './components/AddTask.jsx';
import AddStory from './components/AddStory.jsx';
import HeaderBody from './components/HeaderBody.jsx';


class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          {AddTask}
        </div>

        <div>{AddStory}</div>
        <div>{Row}</div>
      </div>
    )
  }
}

export default Board;