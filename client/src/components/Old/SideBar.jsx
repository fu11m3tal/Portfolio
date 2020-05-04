import React from 'react';

const SideBar = () => {
  return(
    <div className="side-container">
      <div className="side-bar">
        <a className="active" href="#"><i className="fa fa-home"></i></a>
        <a href="https://www.linkedin.com/in/stevenyoh"><img className="linkedin" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img></a>
        <a href="http://github.com/fu11m3tal"><img className="github" src="https://icon-library.net/images/github-svg-icon/github-svg-icon-1.jpg"></img></a>
        <a href="https://www.facebook.com/steven.yoh.583"><img className="facebook" src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"></img></a>
      </div>
    </div>
  )
}
  
export default SideBar;
