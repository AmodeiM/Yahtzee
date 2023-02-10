import fullHouse from "./fullHouse";
import matches from "./matches";
import ofAKind from "./ofAKind";
import straight from "./straight";

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
