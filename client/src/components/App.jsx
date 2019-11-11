import React from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar.jsx';
import SideBar from './SideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
    }
  }

  render() {
    return (
      <div className="app">
        <NavigationBar/>
        <SideBar/>
        <div className="main-container">
          <h4>Hello my name is</h4>
          <br></br>
          <h1>Steven Christopher Yoh.</h1>
          <h1>I love building beautiful and intuitive UI.</h1>
          <h3>Please explore!</h3>
        </div>
      </div>
    )
  }
}

export default App;
