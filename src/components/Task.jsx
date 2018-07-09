import React, { Component } from 'react';
import Draggable from 'react-draggable';




class Task extends Component {
  render () { 
    return (
        <div>
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[50, 50]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
        </div>
    )
  }
}

export default Task;