import React from 'react';
import BoardList from './BoardList.jsx';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <BoardList userID={this.props.match.params.userID} history={this.props.history} />
      </div>
    );
  }
}
export default DashboardPage;
