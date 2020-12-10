import React from "react";
import Button from "react-bootstrap/Button";
import "./OperationButtons.css";

const OperationButtons = () => (
  <div className="operation-buttons">
    <Button variant="outline-primary">Start</Button>
    <Button variant="outline-secondary">Pause</Button>
    <Button variant="outline-danger">Abort</Button>
  </div>
);

export default OperationButtons;
