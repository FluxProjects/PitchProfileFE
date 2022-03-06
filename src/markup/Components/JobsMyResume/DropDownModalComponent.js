import React from "react";

export default function DropDownModalComponent({ onChange, options, value }) {
  return (
    <>
      <select value={value} onChange={onChange} className="form-control">
        {options.map((item) => (
          <option value={item?.state_id ? item.state_id : item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
