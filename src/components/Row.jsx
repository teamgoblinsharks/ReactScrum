import React from 'react';
import RowHeader from './RowHeader.jsx';
import Body from './Body.jsx';

const Row = () => {
  return (
    <div>
      <RowHeader title={'tasks'} />
      <Body />
    </div>
  );
};

export default Row;
