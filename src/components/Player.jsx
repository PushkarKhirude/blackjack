import React, { useState } from 'react'
import Card from './Card'
import './Player.css'



function Player({playerDeck, playerScore, handleSetPlrDeck, handleSetDlrDeck, dealerScore, res}) {
  //const [deck, setDeck] = useState(playerDeck); //uplifted this to game component

  // function handleHitBtn(){
  //   setPlrDeck((d) => dealCard(d));
  // }

  //const playerScore = calculateScore(playerDeck);//uplifted cuz we need it for game over condition
  //setPlayerScore(playerScore);
  
  const hit = (playerScore >= 21) ? null : handleSetPlrDeck;
  // const resText = (playerScore > 21) ? "Bust!": (playerScore === 21 ? "You won!" : null);

  const stayBtn = (playerScore < 21 && dealerScore < playerScore) ? handleSetDlrDeck : null;
  
  const result = ((playerScore < 22 && playerScore > dealerScore )|| (dealerScore > 21) ) ? "You" : "Dealer";


  return (
    <div>

          <h1 className="player-score">You: {playerScore}</h1>
          <div className="player">
              {playerDeck.map((cardName,i) => {
                return(
                  <Card key = {i} cardName={cardName}/>
                )
              })}
          </div>
          <div className="btn-container">
              <button className="hit-btn" onClick={hit}>Hit</button>
              <button className="stay-btn" onClick={stayBtn}>Stay</button>
          </div>
          <div className="btn-container">
              <h1>{result + " won"}</h1>
          </div>
          <div className="reset-container">
              <h1>Refresh The Page To Reset The Game. Dev Is Still Learning React And A Home Page Is W.I.P.</h1>
          </div>
          
      </div>
  )

}

export default Player
