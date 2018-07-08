import React from 'react';

const Task = props => {
  return (
    <div
      style={{
        border: '1px solid black',
      }}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default Task;
