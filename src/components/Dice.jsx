import React from "react";
import dice1 from "../images/dice1.png";
import dice2 from "../images/dice2.png";
import dice3 from "../images/dice3.png";
import dice4 from "../images/dice4.png";
import dice5 from "../images/dice5.png";
import dice6 from "../images/dice6.png";

const DICE_SIDES_TO_NUMBER_MAP = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

function Dice(props) {
  return (
    <img
      src={DICE_SIDES_TO_NUMBER_MAP[props.side]}
      className={props.locked ? "locked" : "not-locked"}
      alt="dice"
      onClick={(e) => props.toggleLock(props.id)}
    ></img>
  );
}

export default Dice;
