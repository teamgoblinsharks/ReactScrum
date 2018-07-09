import React from 'react';
import Row from './Row.jsx';

export default props => {
  return (
    <div
      style={{
        border: '1px solid black',
      }}
      onClick={() => props.history.push(`/test/${props.userID}/${props.boardID}`)}
    >
      <p>BoardIcon</p>
      <p>{props.name}</p>
    </div>
  );
};
