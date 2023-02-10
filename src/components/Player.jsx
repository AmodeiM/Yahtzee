import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Dice from "./Dice";
import RollCounter from "./RollCounter";
import TurnCounter from "./TurnCounter";
import Scorecard from "./Scorecard";
import { useEffect } from "react";
import scoring from "./scoring";

function Player() {
  const [rollCount, setRollCount] = useState(0);
  const [turnCount, setTurnCount] = useState(0);
  const [scorecard, setScorecard] = useState({
    aces: Array(13).fill(null), //easy
    twos: Array(13).fill(null), //easy
    threes: Array(13).fill(null), //easy
    fours: Array(13).fill(null), //easy
    fives: Array(13).fill(null), //easy
    sixes: Array(13).fill(null), //easy
    threeOak: Array(13).fill(null), // hard
    fourOak: Array(13).fill(null), // hard
    fullHouse: Array(13).fill(null), // hard
    smallStraight: Array(13).fill(null), //medium
    largeStraight: Array(13).fill(null), //medium
    yahtzee: Array(13).fill(null), //easy
  });
  const [playerState, setPlayerState] = useState({
    dice: [
      { id: 1, side: 1, locked: false },
      { id: 2, side: 1, locked: false },
      { id: 3, side: 1, locked: false },
      { id: 4, side: 1, locked: false },
      { id: 5, side: 1, locked: false },
    ],
  });

  function matchIsOver(turnCount) {
    return turnCount >= 13;
  }

  useEffect(() => {
    if (rollCount === 3) {
      setRollCount(0);
      setTurnCount(turnCount + 1);
    }
    if (matchIsOver(turnCount)) {
      setRollCount(0);
      setTurnCount(0);
    }
    Object.entries(scorecard).reduce((newScorecard, [category, scores]) => {
      newScorecard[category] = scores;
      newScorecard[category][turnCount] = scoring[category](playerState.dice);
      return newScorecard;
    }, {});

    //setScorecard(newScorecard);
  }, [rollCount]);

  function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }

  const toggleDiceLock = (id) => {
    let newDice = [...playerState.dice];
    const diceToChange = newDice.find((die) => die.id === id);
    diceToChange.locked = !diceToChange.locked;
    setPlayerState({ dice: newDice });
  };

  const diceList = playerState.dice.map((die) => (
    <Dice
      id={die.id}
      side={die.side}
      locked={die.locked}
      key={die.id}
      toggleLock={toggleDiceLock}
    />
  ));

  const rollDice = () => {
    if (rollCount > 3) return false;
    if (turnCount > 13) return false;

    setPlayerState({
      dice: [...playerState.dice].map((d) => ({
        ...d,
        side: d.locked ? d.side : getRandomNumber(),
      })),
    });
    setRollCount(rollCount + 1);
  };

  return (
    <div>
      <Row>
        <Col>
          {diceList}
          <button onClick={rollDice}>Roll</button>
          <RollCounter rollCount={rollCount} />
          <TurnCounter turnCount={turnCount} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Scorecard scorecard={scorecard} />
        </Col>
      </Row>
    </div>
  );
}
export default Player;
