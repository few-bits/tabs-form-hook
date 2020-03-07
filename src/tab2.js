import React from "react";

import "./styles.css";

export default ({ inputs, onChange, dirtyFields }) => {
  return (
    <div className="form2">
      <h1>Tab 2</h1>
      <div>
        <label htmlFor="username">User Name</label>
        <input
          name="username"
          className={`${dirtyFields.has("username") ? "dirty" : ""}`}
          value={inputs.username}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
