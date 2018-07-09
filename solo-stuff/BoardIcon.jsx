import React from 'react';
import Row from './Row.jsx';

export default props => {
  return (
    <div
      className='board-icon'
      style={{
        border: '1px solid black',
        height: '20%',
        width: '50%',
        padding: '4px 4px'
      }}
      onClick={() => props.history.push(`/test/${props.boardId}/${props.name}`)}
    >
      <div>
      <h3>Project Names:</h3>
      <p>{props.name}</p>
      </div>
    </div>
  );
};
