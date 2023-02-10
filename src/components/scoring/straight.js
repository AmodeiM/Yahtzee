export default (dice, length) => {
  if (length !== "small" && length !== "large")
    throw "Straight length must be small or large";
  let minDice = Math.min(...dice.map((d) => d.side));
  if (
    dice.map((d) => d.side).includes(minDice + 1) &&
    dice.map((d) => d.side).includes(minDice + 2) &&
    dice.map((d) => d.side).includes(minDice + 3)
  ) {
    return dice.map((d) => d.side).includes(minDice + 4) && length == "large"
      ? 40
      : 30;
  } else {
    return 0;
  }
};
