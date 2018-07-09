import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      order: ['todo', 'inProgress', 'testing', 'done'],
      value: '',
      stories: [{ name: 'user will something' }],
      todo: [],
      inProgress: [{ name: 'im in progress', status: 'inProgress' }],
      testing: [{ name: 'test that button', status: 'testing' }],
      done: [{ name: 'woooooo!', status: 'done' }],
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.trim()) {
      const todo = this.state.todo
        .slice()
        .concat({ name: this.state.value.trim(), status: 'todo' });
      this.setState({ value: '', todo });
    }
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

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <h1>Board</h1>
        <div>
          <h1>Add new Task</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="project name"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button onClick={this.handleSubmit}>Add New Task</button>
          </form>
          <div>
            <Row columnHeader="stories" tasks={this.state.stories} />
            <Row columnHeader="todos" tasks={this.state.todo} />
            <Row columnHeader="inProgress" tasks={this.state.inProgress} />
            <Row columnHeader="testing" tasks={this.state.testing} />
            <Row columnHeader="done" tasks={this.state.done} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
