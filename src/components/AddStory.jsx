import React, { Component } from 'react';

class AddStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="story" id="storyInput" />
        <button onClick={() => this.props.addStory(document.querySelector('#storyInput').value)}>
          Add Story
        </button>
      </div>
    );
  }
}
export default AddStory;
