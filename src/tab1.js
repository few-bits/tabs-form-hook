import React from "react";
import TextField from "@material-ui/core/TextField";

import Clicker from "./components/clicker/Clicker";

import "./styles.css";

export default ({ inputs, onChange, onCustomChange, dirtyFields }) => {
  console.log("dirtyFields", dirtyFields);
  return (
    <div className="form1">
      <h1>Tab 1</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <TextField
          name="firstName"
          label="Standard"
          value={inputs.firstName}
          onChange={onChange}
        />
        <Clicker
          value={inputs.clicker}
          onChange={value => onCustomChange("clicker", value)}
        />
        {/* <input
          name="firstName"
          className={`${dirtyFields.has("firstName") ? "dirty" : ""}`}
          value={inputs.firstName}
          onChange={onChange}
        /> */}
      </div>
      <div>
        <label htmlFor="firstName">Last Name</label>
        <input
          name="lastName"
          className={`${dirtyFields.has("lastName") ? "dirty" : ""}`}
          value={inputs.lastName}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
