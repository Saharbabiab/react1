import React, { useEffect } from "react";
import { useState } from "react";
import ShowHeads from "../components/showHead.jsx";
import { getRandomBighead } from "../components/bighead.jsx";
import ShowPlayer from "../components/showPlayer.jsx";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

let nextid = 0;
const app = observer(({ heads, word, letters }) => {
  const [player, setPlayer] = useState([]);
  const [delay, setDelay] = useState(2000);
  const [active, setActive] = useState(null);

  useEffect(() => {
    let intervalID;
    const startInterval = () => {
      intervalID = setInterval(() => {
        if (!active) {
          clearInterval(intervalID);
        } else {
          play();
        }
      }, delay);
    };

    if (active) {
      startInterval();
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [active]);

  function addHead() {
    console.log(heads.getSize());
    if (heads.getSize >= 5) {
      alert("You can't add more than 5 heads");
      return;
    }
    const name = prompt("Enter your name");
    const newHead = {
      name: name,
      letters: "",
      points: 0,
      id: nextid++,
      head: { ...getRandomBighead() },
    };
    setPlayer([...player, newHead]);
  }

  function start() {
    setActive(true);
    heads.resetall();
    word.getRndWord();
  }

  function play() {
    const id = heads.getRNDplayer();
    const player = heads.getActivePlayer();
    const letter = letters.getRndLetter();
    player.letters += letter;
    if (word.checkLetter(letter)) {
      player.points++;
      letters.setWrongLetter(letter);
    } else {
      letters.setWrongLetter(letter);
    }
    if (word.done()) {
      setActive(false);
      alert("Game over");
    }
  }

  function save() {
    console.log(heads.Players.length);
    heads.add({ ...player[nextid - 1] });
    setPlayer([...player]);
    console.log(heads.Players.length);
  }

  function map(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }

  return (
    <>
      <h1>Big Heads: </h1>

      <button onClick={addHead}>Add head</button>
      {heads.getSize() > 1 ? (
        <>
          <button onClick={() => start()}>Start</button>
          <input
            type="range"
            min="1000"
            max="10000"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          />
          <h1>{delay}</h1>
        </>
      ) : null}

      {player.length > heads.getSize() ? (
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "50px" }}>
            <ShowPlayer head={player[nextid - 1]} />
            <button onClick={() => getRandom()}>random</button>
            <button onClick={() => save()}>save</button>
          </div>
        </div>
      ) : null}
      <div style={{ display: "flex" }}>
        {map(heads.getPlayers(), (head) => (
          <div style={{ marginRight: "50px" }}>
            <ShowHeads heads={heads} head={head} id={head.id} />
          </div>
        ))}
      </div>
      {active ? (
        <div>
          <h1>Word: {word.hiddenWord}</h1>
          <h1>Wrong letters: {letters.getWrongLetter()}</h1>
        </div>
      ) : null}
    </>
  );
});
export default app;
