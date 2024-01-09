import { useState } from "react";
import List from "../components/actions.jsx";
import PlayerStore from "../components/player.jsx";
import LettersStore from "../components/letters.jsx";
import WordsStore from "../components/words.jsx";

export default function App() {
  const players = new PlayerStore();
  const letters = new LettersStore();
  const word = new WordsStore();

  return (
    <div>
      <List heads={players} word={word} letters={letters} />
    </div>
  );
}
