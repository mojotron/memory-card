import React from "react";
import "../styles/HeroCard.css";

function HeroCard(props) {
  return (
    <div className="HeroCard">
      <img
        className="HeroCard__image"
        src={props.data.image}
        alt={props.data.name}
        onClick={props.handleClick}
        data-id={props.data.id}
      />
      <h2 className="HeroCard__name">{props.data.name}</h2>
    </div>
  );
}

export default HeroCard;
