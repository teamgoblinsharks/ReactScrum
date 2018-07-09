import React from 'react';
import BoardIcon from './BoardIcon.jsx';

class BoardList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   if (this.state.value.trim()) {
  //     const boards = this.state.boards.slice().concat({ name: this.state.value.trim() });
  //     this.setState({ value: '', boards });
  //   }
  // }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }
  render() {
    const Boards = this.props.boards.map(board => (
      <BoardIcon
        history={this.props.history}
        userID={this.props.userID}
        boardId={board._id}
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
          <button onClick={(e) => {
            e.preventDefault();
            this.props.addBoard(this.state.value, this.props.userID);
          }}>Add New Project</button>
        </form>
        {Boards}
      </div>
    );
  }
}

export default BoardList;
