import React from "react";
import Card from "./Card";
import "./Dealer.css";

function Dealer({ dealerDeck, dealerScore }) {
  return (
    <div>
      <h1 className="dealer-score">Dealer: {dealerScore}</h1>
      <div className="dealer">
        {dealerDeck.map((cardName, i) => {
          return <Card key={i} cardName={cardName} />;
        })}
      </div>
    </div>
  );
}

export default Dealer;
