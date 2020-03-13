import React from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar.jsx';
import SideBar from './SideBar.jsx';

import About from './About.jsx';
import Experience from './Experience.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';

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
        <About />
        <Experience />
        <Work />
        <Contact />
        <Resume />
      </div>
    )
  }
}

export default App;
