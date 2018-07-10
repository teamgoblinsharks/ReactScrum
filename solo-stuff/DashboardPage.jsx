import React from 'react';
import axios from 'axios';

import BoardList from './BoardList.jsx';
import * as boardActions from '../src/actions/boards.js';
import { connect } from 'react-redux';

import { logoutUser } from '../src/actions/users.js';

const mapDispatchToProps = dispatch => {
  return {
    addBoard: (name, userId) => dispatch(boardActions.addBoard(name, userId)),
    getBoards: userId => dispatch(boardActions.getBoards(userId)),
    logoutUser: userId => dispatch(logoutUser(userId)),
  };
};

const mapStateToProps = store => {
  return {
    boards: store.boards,
  };
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.boards.length === 0) {
      this.props.getBoards(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className="dashboard-page">
        <button
          onClick={() => {
            axios
              .post('http://localhost:3000/logout', { _id: this.props.match.params.id })
              .then(res => {
                this.props.logoutUser(this.props.match.params.id);
                this.props.history.push('/');
              });
          }}
        >
          Logout
        </button>
        <h1>{this.props.match.params.id}</h1>
        <BoardList
          userID={this.props.match.params.id}
          history={this.props.history}
          addBoard={this.props.addBoard}
          boards={this.props.boards}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
