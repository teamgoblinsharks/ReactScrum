import React from 'react';
import RowHeader from './RowHeader.jsx';
import RowBody from './RowBody.jsx';

const Row = props => {
  return (
    <div className="row">
      <RowHeader columnHeader={props.columnHeader} />
      <RowBody isStory={props.isStory} tasks={props.tasks} boardId={props.boardId} />
    </div>
  );
};

export default Row;
