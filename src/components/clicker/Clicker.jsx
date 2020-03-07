import React from "react";

import "./Clicker.css";

export default ({ value, onChange }) => {
  return (
    <div className="clicker">
      <div className="left" onClick={() => onChange(value - 1)} />
      <div className="center">{value}</div>
      <div className="right" onClick={() => onChange(value + 1)} />
    </div>
  );
};
