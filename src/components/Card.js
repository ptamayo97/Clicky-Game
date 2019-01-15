import React from "react";

const Card = props => {
  return (
    <div className="col s12 m3 card-wrapper ">
      <div
        className="card card-container hvr-grow"
        key={props.id}
        name={props.name}
        onClick={props.click}
      >
        <div className="card-image card-child ">
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default Card;
