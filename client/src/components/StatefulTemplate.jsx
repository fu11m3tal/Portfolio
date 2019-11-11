import React from 'react';
import axios from 'axios'

class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export default Stateful;
