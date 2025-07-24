import React from "react";
import "./Card.css";

function Card({ cardName }) {
  return (
    <div className="card-container ">
      <img
        src={`../blackjack/cards/${cardName}.png`}
        className="shadow-green-600 shadow-sm rounded-md border-gray-200 border mx-1"
        alt=""
      />
    </div>
  );
}

export default Card;
