import React from "react";
import Badge from "react-bootstrap/Badge";

function TurnCounter(props) {
  return (
    <h3>
      <Badge bg="dark">Turn # {props.turnCount + 1}</Badge>
    </h3>
  );
}

export default TurnCounter;
