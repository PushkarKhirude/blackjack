import React, { useState } from 'react'
import Card from './Card'
import Dealer from './Dealer'
import Player from './Player'

function Game({deck, playerDeck, dealerDeck, dealCard}) {
  let dealerSum = 0;
  let playerSum = 0;
  let res = "";
  

  let stayFlag = false;

  function calculateScore(deckArr){
    let score = 0;
    let aceCount = 0;
    for(let i = 0; i < deckArr.length; i++){
      const value = deckArr[i].split("-");
      // console.log(value);
      if(value[0] === 'A'){
        aceCount++;
        continue;
      }
      if(value[0] === 'K' || value[0] === 'J' || value[0] === 'Q'){
        score += 10;
        continue;
      }
      score += parseInt(value[0]);
    }
    while(aceCount){
      if(21 < (score+11)){
        score++;
        aceCount--;
      }
      else{
        score += 11;
        aceCount--;
      }
    }
    // console.log(score);
    return score;
  }

  const [plrDeck, setPlrDeck] = useState(playerDeck);//uplifted state cuz player component cant execute, need to ask someone
  const [dlrDeck, setDlrDeck] = useState(dealerDeck);
  //const [mainDeck, setMainDeck] = useState(deck);

  function handleSetPlrDeck(){
    setPlrDeck((prevDeck) => {
      const updatedDeck = [...prevDeck];
      dealCard(updatedDeck);
      return updatedDeck;
    });
  //   setDlrDeck((prevDeck) => {
  //     const updatedDeck = [...prevDeck];
  //     return updatedDeck;
  //   });
  }

  function handleSetDlrDeck(flag){
    
    setDlrDeck((prevDeck) => {

      //dealerSum = calculateScore(dlrDeck);
      const updatedDeck = [...prevDeck];
      while(dealerSum < 22 && dealerSum <= playerSum){

        dealCard(updatedDeck);
        dealerSum = calculateScore(updatedDeck);

      }

      // const updatedDeck = [...prevDeck];
      // dealCard(updatedDeck);
      
      return updatedDeck;
    });
    // res = gameOver();

  }

  function gameOver(){
    //console.log("----------You Won!-----------");
    if(dealerSum < 22 && playerSum < dealerSum){
      console.log("----------Dealer Won!-----------");
       let resl = "dealer";
    }
    if(dealerSum > 21){
      console.log("----------You Won!-----------");
      let resl = "you";
    }
    return resl;


  }

  // function setPlayerScore(scr){
  //   playerSum = scr;
  // }
  

  playerSum = calculateScore(plrDeck);
  dealerSum = calculateScore(dlrDeck);
  console.log(playerSum);
  console.log(dealerSum);
  console.log(deck);
  console.log(plrDeck);
  console.log(dlrDeck);
  
  


  return (
    <div>
      <Dealer dealerDeck={dlrDeck} dealerScore={dealerSum} handleSetDlrDeck={handleSetDlrDeck} stayFlag={stayFlag}/>
      <Player playerDeck={plrDeck} playerScore={playerSum} handleSetPlrDeck={handleSetPlrDeck} handleSetDlrDeck={handleSetDlrDeck} dealerScore={dealerSum} res={res}/>
    </div>
  )
}

export default Game
