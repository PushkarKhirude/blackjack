import "./App.css";
import Game from "./components/Game";

function App() {
  const dealerDeck = [];
  const playerDeck = [];
  const deck = [];

  function buildDeck() {
    deck.length = 0; //every time the deck is built, it is built from scratch
    // so we need to delete all elements from the deck array
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const suits = ["C", "D", "S", "H"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        deck.push(values[j] + "-" + suits[i]);
      }
    }
  }

  function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
      let j = Math.floor(Math.random() * deck.length);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  }

  function dealCard(deckArr) {
    deckArr.push(deck.pop());
  }

  buildDeck();
  shuffleDeck();
  dealCard(dealerDeck);
  dealCard(playerDeck);
  dealCard(playerDeck);

  return (
    <>
      <Game
        playerDeck={playerDeck}
        dealerDeck={dealerDeck}
        dealCard={dealCard}
        shuffle={shuffleDeck}
        build={buildDeck}
      />
    </>
  );
}

export default App;
