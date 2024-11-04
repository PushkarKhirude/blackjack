import { useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
  const dealerDeck = [];
  const playerDeck = [];
  const deck = [] ;

  function buildDeck(){
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];
    const suits = ["C", "D", "S", "H"];
    for(let i = 0; i < suits.length; i++){
      for(let j = 0; j < values.length; j++){
        deck.push(values[j] + "-" + suits[i]);
      }
    }
  }

  function shuffleDeck(){
    for(let i = 0; i < deck.length; i++){
      let j = Math.floor(Math.random() * deck.length);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  }

  function dealCard(deckArr){
    deckArr.push(deck.pop());
    // playerSum = calculateScore(deckArr);
  }

  buildDeck();
  shuffleDeck();
  dealCard(dealerDeck);
  dealCard(playerDeck);
  dealCard(playerDeck);

  return (
    <>
      <Game deck={deck} playerDeck={playerDeck} dealerDeck={dealerDeck} dealCard={dealCard}/>
    </>
  )
}

export default App
