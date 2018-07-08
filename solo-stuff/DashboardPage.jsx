import React from 'react';
import BoardList from './BoardList.jsx';
import * as boardActions from '../src/actions/boards.js';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addBoard: (name, userId) => dispatch(boardActions.addBoard(name, userId)),
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


  render() {

    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <BoardList userID={this.props.match.params.id} history={this.props.history} addBoard={this.props.addBoard} />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
