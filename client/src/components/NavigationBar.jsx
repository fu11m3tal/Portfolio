import React from 'react';

const NavigationBar = () => {
  return(
    <div className="navContainer">
      <nav>
        <a href="/html/">About</a> |
        <a href="/css/">Experience</a> |
        <a href="/js/">Work</a> |
        <a href="/jquery/">Contact</a>
      </nav>
      <button>Resume</button>
    </div>
  )
}
  
export default NavigationBar;
