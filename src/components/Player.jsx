import { useState } from "react";
import Card from "./Card";
import "./Player.css";

function Player({
  playerDeck,
  playerScore,
  handleSetPlrDeck,
  handleSetDlrDeck,
  dealerScore,
  stayFlag,
  setStayFlag,
}) {
  const stayBtn =
    playerScore < 21 && dealerScore < playerScore
      ? () => {
          setStayFlag(true);
          handleSetDlrDeck();
        }
      : null;

  const hit = playerScore >= 21 || stayFlag ? null : handleSetPlrDeck;

  const result =
    (playerScore < 22 && playerScore > dealerScore) || dealerScore > 21
      ? "You"
      : "Dealer";

  return (
    <div className="player-container mt-5 ">
      <div className="btn-container">
        {hit == null ? (
          <h1
            className={`text-2xl font-bold ${
              result == "You" ? "text-green-700" : "text-red-700"
            }`}
          >
            {result + " Won"}
          </h1>
        ) : (
          <h1 className={`text-2xl font-bold `}>{"Your Move"}</h1>
        )}
      </div>
      <h1 className="player-score font-bold mt-3">You: {playerScore}</h1>
      <div className="player">
        {playerDeck.map((cardName, i) => {
          return <Card key={i} cardName={cardName} />;
        })}
      </div>
      <div className="btn-container mt-9">
        <button
          className="hit-btn hover:bg-green-200 active:bg-green-400 border cursor-pointer"
          onClick={hit}
        >
          Hit
        </button>
        <button
          className="stay-btn hover:bg-gray-200 active:bg-gray-400 border cursor-pointer"
          onClick={stayBtn}
        >
          Stay
        </button>
      </div>
    </div>
  );
}

export default Player;
