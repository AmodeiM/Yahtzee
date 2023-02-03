import React from "react";
import Badge from "react-bootstrap/Badge";

function RollCounter(props) {
  return (
    <h3>
      <Badge bg="dark">Roll # {props.rollCount + 1}</Badge>
    </h3>
  );
}

export default RollCounter;
