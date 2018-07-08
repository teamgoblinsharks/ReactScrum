import React from 'react'
import BoardLink from './BoardLink.jsx';

export default props => {
   return (
      <div>
         {props.boards.map(board => <BoardLink name={board.name} />)}
      </div>
   )
}
