import React from 'react';

const NavigationBar = (props) => {
  return(
    <div className="nav-container">
      <div className="nav-bar">
        <a className="active" href="#home">Home</a> 
        <a href="#about">About</a> 
        <a href="#experience">Experience</a> 
        <a href="#work">Work</a> 
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </div>
    </div>
  )
}
  
export default NavigationBar;
