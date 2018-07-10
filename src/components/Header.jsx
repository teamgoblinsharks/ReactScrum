import React from 'react';


class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className = 'header'>
        <div>
        Scrum Didilyumptious
        </div>
        <div className = 'header-info'>
          <div>
            User Name  
          </div>
          <div>
            Logout
          </div>
        </div>
      </div>
    )
  }
}

export default Header; 