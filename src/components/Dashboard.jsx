import React, { Component } from 'react'
import AddBoard from './AddBoard.jsx';
import * as boardActions from '../actions/boards.js';

import { connect } from 'react-redux';
import BoardLink from './BoardLink.jsx';
import BoardList from './BoardList.jsx';

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

class Dashboard extends Component {

   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <div>
               <input type="text" placeholder="Board Name" id="board" />
               <button onClick={() => this.props.addBoard(document.querySelector('#board').value)}>Add Board</button>
            </div>
            <button onClick={() => console.log(this.props.boards)}>get boards</button>
            <div>
               {this.props.boards.map(board => <BoardLink name={board.name} id={board._id} />)}
               {/* <BoardList boards={this.props.boards} /> */}
            </div>
         </div>
      )
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Dashboard);
