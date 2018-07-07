import React from 'react';
import 'babel-polyfill';

const AddBoard = ({ addBoard }) => {
  return (
    <div>
      <input type="text" placeholder="Board Name" id="board" />
      <button onClick={() => addBoard(document.querySelector('#board').value)}>Add Board</button>
    </div>
  );
};

export default AddBoard;
