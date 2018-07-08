import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      password: '',
      username: '',
      formError: '',
    };
  }
  onSubmitHandler(e) {
    e.preventDefault();

    if (this.state.password.trim() && this.state.username.trim()) {
      axios
        .post(`http://localhost:3000${this.props.formRoute}`, {
          username: this.state.username.trim(),
          password: this.state.password.trim(),
        })
        .then(res => {
          if (res.data.error) {
            this.setState({ formError: res.data.error });
          } else {
            this.props.history.push(`/test/${res.data._id}`);
          }
        });
      this.setState({ username: '', password: '' });
    }
  }
  onValueChange(e) {
    e.preventDefault();
    e.target.placeholder === 'username'
      ? this.setState({ username: e.target.value })
      : this.setState({ password: e.target.value });
    if (this.state.username.trim() && this.state.password.trim()) {
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" placeholder="username" onChange={this.onValueChange} />
          <input type="text" placeholder="password" onChange={this.onValueChange} />
          <button onClick={this.onSubmitHandler}>submit</button>
        </form>
        {this.state.formError && <p>{this.state.formError}</p>}
      </div>
    );
  }
}

export default Form;
