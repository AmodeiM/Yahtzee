import fullHouse from "./fullHouse.js";
import matches from "./matches.js";
import ofAKind from "./ofAKind.js";
import straight from "./straight.js";

export default {
  aces: (dice) => matches(dice, 1),
  twos: (dice) => matches(dice, 2),
  threes: (dice) => matches(dice, 3),
  fours: (dice) => matches(dice, 4),
  fives: (dice) => matches(dice, 5),
  sixes: (dice) => matches(dice, 6),
  threeOak: (dice) => ofAKind(dice, 3),
  fourOak: (dice) => ofAKind(dice, 4),
  fullHouse: (dice) => fullHouse(dice),
  smallStraight: (dice) => straight(dice, "small"),
  largeStraight: (dice) => straight(dice, "large"),
  yahtzee: (dice) => ofAKind(dice, 5),
};
