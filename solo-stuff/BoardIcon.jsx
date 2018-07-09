import React from 'react';
import Row from './Row.jsx';

import { connect } from 'react-redux';

import { deleteBoard } from '../src/actions/boards.js';

const BoardIcon = props => {
  let clickedButton = false;
  return (
    <div
      style={{
        border: '1px solid black',
      }}
      onClick={() => {
        if (!clickedButton) props.history.push(`/test/${props.boardId}/${props.name}`);
      }}
    >
      <p>
        BoardIcon
        <button
          onClick={() => {
            clickedButton = true;
            props.deleteBoard(props.boardId);
          }}
        >
          X
        </button>
      </p>
      <p>{props.name}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteBoard: boardId => {
    dispatch(deleteBoard(boardId));
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(BoardIcon);
