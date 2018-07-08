import React from 'react';

class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
export default ComponentName;
