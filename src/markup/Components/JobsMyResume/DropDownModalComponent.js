import React from "react";

export default function DropDownModalComponent({ onChange, options, value }) {
  return (
    <>
      <select value={value} onChange={onChange} className="form-control">
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
