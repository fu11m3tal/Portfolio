import React from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
    }
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <h4>Hello my name is Steven.</h4>
        <h1>I build things for the web.</h1>
      </div>
    )
  }
}

export default App;
