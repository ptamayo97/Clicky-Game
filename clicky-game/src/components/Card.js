import React from "react";

const Card = props => {
  return (
    <div className="card" key={props.id} name={props.name}>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default Card;
