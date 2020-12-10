import React from "react";
import Form from "react-bootstrap/Form";

const radiosText = [
  "Complete",
  "Ongoing",
  "Paused",
  "Failed",
  "Aborted",
  "All",
];

const SelectionRadios = () => (
  <Form>
    <div style={{ margin: "12px" }}>
      {radiosText.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          key={`selection-radio-${text}`}
        />
      ))}
    </div>
  </Form>
);

export default SelectionRadios;
