import React, { Component } from 'react';
import Body from './Body.jsx';


const RowHeader = props => {
    return (
      <div>
        <div>{props.title}</div>
        <Body />
      </div>
    )
}

export default RowHeader;
