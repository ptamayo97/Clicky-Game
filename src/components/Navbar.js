import React from "react";

const Navbar = props => {
  return (
    <div id="nav" className="red z-depth-2 white-text">
      <div id="logo" className="navItem ">
        <strong>Memory Smash</strong>
      </div>
      <div id="message" className="navItem flow-text">
        {props.message}
      </div>
      <div id="score" className="navItem flow-text">
        <div>
          Score: {props.score} <br /> Top Score: {props.topScore}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
