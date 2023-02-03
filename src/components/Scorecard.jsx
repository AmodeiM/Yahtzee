import React from "react";
import Table from "react-bootstrap/Table";
const CATEGORY_NAME_MAP = {
  aces: "Aces",
  twos: "Twos",
  threes: "Threes",
  fours: "Fours",
  fives: "Fives",
  sixes: "Sixes",
  threeOak: "Three of a Kind",
  fourOak: "Four of a Kind",
  fullHouse: "Full House",
  smallStraight: "Small Straight",
  largeStraight: "Large Straight",
  yahtzee: "Yahtzee",
};
function Scorecard({ scorecard }) {
  // array where each element is a TH in the tbody of the scorecard
  let turnColumns = Array(13)
    .fill(null)
    .map((c, i) => i + 1)
    .map((i) => <th key={`scorecard-header-${i}`}>#{i}</th>);

  // array where each element is a row with the category name and then 13 columns, one for each turn
  let scoreRows = Object.entries(scorecard).map(([category, scores]) => (
    <tr key={`score-row-${category}`}>
      <td className="category">{CATEGORY_NAME_MAP[category]}</td>
      {scores.map((score, idx) => (
        <td key={`score-cell-${category}-${idx}`}>{score}</td>
      ))}
    </tr>
  ));

  return (
    <div className="scorecard">
      <Table bordered striped size="sm">
        <thead>
          <tr>
            <th>Categories</th>
            {turnColumns}
          </tr>
        </thead>
        <tbody>{scoreRows}</tbody>
      </Table>
    </div>
  );
}

export default Scorecard;
