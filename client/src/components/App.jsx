import React from 'react';
import axios from 'axios';
// import NavigationBar from './Old/NavigationBar.jsx';
// import SideBar from './Old/SideBar.jsx';

// import About from './Old/About.jsx';
// import Experience from './Old/Experience.jsx';
// import Work from './Old/Work.jsx/index.js';
// import Contact from './Old/Contact.jsx';
// import Resume from './Old/Resume.jsx';
import Navigation from './Navigation.jsx';
import Cards from './Cards.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
    }
  }

  render() {
    return (
      <div className="app">
        <Cards />
        <Navigation />
      </div>
    )
  }
}

export default App;
