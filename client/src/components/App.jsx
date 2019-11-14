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
        <div className="about" name="about">About</div>
        <div className="experience" name="experience">Experience</div>
        <div className="work" name="work">Work</div>
        <div className="contact" name="contact">Contact</div>
        <a className="resume" name="resume">Resume</a>
      </div>
    )
  }
}

export default App;
