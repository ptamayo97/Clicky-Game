import React from "react";

const Card = props => {
  return (
    <div className="col s12 m3 card-wrapper ">
      <div
        className="card card-container hvr-grow z-depth-2"
        key={props.id}
        name={props.name}
        onClick={props.shuffle}
      >
        <div className="card-image card-child ">
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default Card;
