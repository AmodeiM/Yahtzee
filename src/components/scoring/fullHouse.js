export default (dice) => {
  let sortedDice = dice.map((d) => d.side).sort();
  if (
    (sortedDice[0] === sortedDice[1] &&
      sortedDice[2] === sortedDice[4] &&
      sortedDice[0] != sortedDice[2]) ||
    (sortedDice[0] === sortedDice[2] &&
      sortedDice[3] === sortedDice[4] &&
      sortedDice[0] != sortedDice[3])
  ) {
    return 25;
  }
  return 0;
};
