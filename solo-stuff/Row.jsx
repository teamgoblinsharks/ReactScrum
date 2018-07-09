import React from 'react';
import RowHeader from './RowHeader.jsx';
import RowBody from './RowBody.jsx';

const Row = props => {

  return (
    <div className='Row' style={{border: '1px black'}}>
      <div>
      <RowHeader columnHeader={props.columnHeader} />
      <RowBody tasks={props.tasks} boardId={props.boardId} />
    </div>
    </div>
  );
};

export default Row;
