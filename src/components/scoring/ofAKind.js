export default (dice, amount) => {
  if (![3, 4, 5].includes(amount)) throw "Of A Kind length must be 3, 4 or 5";
  let diceCount = dice
    .map((d) => d.side)
    .reduce((acc, side) => {
      if (!acc[side]) acc.side = 0;
      acc.side++;
      return acc;
    }, {});
  let maxMatches = Math.max(
    Object.values(
      dice
        .map((d) => d.side)
        .reduce((acc, side) => {
          if (!acc[side]) acc.side = 0;
          acc.side++;
          return acc;
        }, {})
    )
  );
  let topDice = Math.max(
    Object.entries(diceCount)
      .filter(([side, count]) => count == maxMatches)
      .map(([side, count]) => side)
  );
  if (amount == 3 && maxMatches >= 3) return topDice * 3;
  if (amount == 4 && maxMatches >= 4) return topDice * 4;
  if (amount == 5 && maxMatches >= 5) return 100; // yahtzee
  return 0;
};
