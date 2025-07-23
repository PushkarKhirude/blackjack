import Card from "./Card";
import "./Player.css";

function Player({
  playerDeck,
  playerScore,
  handleSetPlrDeck,
  handleSetDlrDeck,
  dealerScore,
}) {
  const hit = playerScore >= 21 ? null : handleSetPlrDeck;

  const stayBtn =
    playerScore < 21 && dealerScore < playerScore ? handleSetDlrDeck : null;

  const result =
    (playerScore < 22 && playerScore > dealerScore) || dealerScore > 21
      ? "You"
      : "Dealer";

  return (
    <div>
      <h1 className="player-score">You: {playerScore}</h1>
      <div className="player">
        {playerDeck.map((cardName, i) => {
          return <Card key={i} cardName={cardName} />;
        })}
      </div>
      <div className="btn-container">
        <button className="hit-btn" onClick={hit}>
          Hit
        </button>
        <button className="stay-btn" onClick={stayBtn}>
          Stay
        </button>
      </div>
      <div className="btn-container">
        <h1>{result + " won"}</h1>
      </div>
      <div className="reset-container"></div>
    </div>
  );
}

export default Player;
