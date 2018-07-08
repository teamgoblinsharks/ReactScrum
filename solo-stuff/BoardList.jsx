import React from 'react';
import { connect } from 'react-redux';

import BoardIcon from './BoardIcon.jsx';
import { addBoard } from '../src/actions/boards.js';
class BoardList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      boards: [],
    };
  }
  componentDidMount() {
    // NEED TO CHANGE THIS SO SPECIFIC TO LOGGED IN USER
    this.setState({ boards: this.props.boards });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.trim()) {
      const board = { name: this.state.value.trim() };
      const boards = this.state.boards.slice().concat(board);
      this.props.addBoard(board);
      this.setState({ value: '', boards });
    }
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }
  render() {
    const Boards = this.state.boards.map(board => (
      <BoardIcon
        history={this.props.history}
        userID={this.props.userID}
        boardID={board._id}
        name={board.name}
        key={Math.random()}
      />
    ));
    return (
      <div>
        <h1>Board List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="project name"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.handleSubmit}>Add New Project</button>
        </form>
        {Boards}
      </div>
    );
  }
}

const mapStateToProps = ({ boards }) => ({ boards });
const mapDispatchToProps = dispatch => ({ addBoard: name => dispatch(addBoard(name)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardList);
