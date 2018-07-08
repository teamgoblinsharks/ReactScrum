import React from 'react';

const RowHeader = props => {
  return (
    <div>
      <h1>{props.columnHeader}</h1>
    </div>
  );
};

export default RowHeader;
