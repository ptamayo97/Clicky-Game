import React from "react";

const Navbar = props => {
  return (
    <div id="nav" className="red z-depth-2 white-text">
      <div>
        <strong>Clicky Game!</strong>
      </div>
      <div>Click an image to begin!</div>
      <div>
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </div>
  );
};

export default Navbar;
