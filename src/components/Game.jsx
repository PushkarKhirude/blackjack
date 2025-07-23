import React, { useState } from "react";
import Dealer from "./Dealer";
import Player from "./Player";

function Game({ playerDeck, dealerDeck, dealCard, shuffle, build }) {
  const [plrDeck, setPlrDeck] = useState(playerDeck); //uplifted state cuz player component cant execute, need to ask someone
  const [dlrDeck, setDlrDeck] = useState(dealerDeck);

  let dealerSum = 0;
  let playerSum = 0;

  function calculateScore(deckArr) {
    let score = 0;
    let aceCount = 0;
    for (let i = 0; i < deckArr.length; i++) {
      const value = deckArr[i].split("-");
      if (value[0] === "A") {
        aceCount++;
        continue;
      }
      if (value[0] === "K" || value[0] === "J" || value[0] === "Q") {
        score += 10;
        continue;
      }
      score += parseInt(value[0]);
    }
    while (aceCount) {
      if (21 < score + 11) {
        score++;
        aceCount--;
      } else {
        score += 11;
        aceCount--;
      }
    }
    return score;
  }

  function handleSetPlrDeck() {
    setPlrDeck((prevDeck) => {
      const updatedDeck = [...prevDeck];
      dealCard(updatedDeck);
      return updatedDeck;
    });
  }

  function handleSetDlrDeck() {
    setDlrDeck((prevDeck) => {
      const updatedDeck = [...prevDeck];
      while (dealerSum < 22 && dealerSum <= playerSum && dealerSum < 18) {
        dealCard(updatedDeck);
        dealerSum = calculateScore(updatedDeck);
      }
      return updatedDeck;
    });
  }

  function handleReset() {
    build(); //this will create a brand new deck
    shuffle(); //this will shuffle the new deck
    setDlrDeck(() => {
      //these setter will deal cards to dealer and player
      const newDeck = [];
      dealCard(newDeck);
      return newDeck;
    });
    setPlrDeck(() => {
      const newDeck = [];
      dealCard(newDeck);
      dealCard(newDeck);
      return newDeck;
    });
  }

  playerSum = calculateScore(plrDeck);
  dealerSum = calculateScore(dlrDeck);

  return (
    <div className="text-center">
      <button className="border " onClick={handleReset}>
        reset
      </button>
      <Dealer dealerDeck={dlrDeck} dealerScore={dealerSum} />
      <Player
        playerDeck={plrDeck}
        playerScore={playerSum}
        handleSetPlrDeck={handleSetPlrDeck}
        handleSetDlrDeck={handleSetDlrDeck}
        dealerScore={dealerSum}
      />
    </div>
  );
}

export default Game;
