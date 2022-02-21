import React from "react";

export default function DropDownModalComponent({ onChange, options }) {
  return (
    <>
      <select onChange={onChange} className="form-control">
        {options.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </>
  );
}
