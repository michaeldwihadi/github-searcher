import React from "react";
import "./index.css";

const DropdownInput = ({ handleChange, dropdownValue }) => {
  return (
    <div className="dropdown-container">
      <select
        className="select-dropdown"
        name="dropdowninput"
        value={dropdownValue}
        onChange={handleChange}
      >
        <option className="dropdown-options" value="users">
          Users
        </option>
        <option className="dropdown-options" value="repository">
          Repository
        </option>
      </select>
    </div>
  );
};

export default DropdownInput;
