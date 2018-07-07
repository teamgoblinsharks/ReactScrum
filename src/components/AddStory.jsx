import React, { Component } from 'react'

class AddStory extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="story" id="storyInput" />
        <button onClick={() => this.props.AddStory(document.querySelector('#storyInput').value)}>Add Story</button>
      </div>
    )
  }
}
export default AddStory;