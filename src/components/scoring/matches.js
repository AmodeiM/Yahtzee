export default (dice, matches) => {
  if (![1, 2, 3, 4, 5, 6].includes(matches)) throw "invalid dice side";
  return dice.filter((d) => d.side === matches).length * matches;
};
