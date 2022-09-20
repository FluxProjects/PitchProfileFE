import React from "react";

export default function DropDownModalComponent({ onChange, options, value }) {
  return (
    <>
      <select value={value} onChange={onChange} className="form-control">
        <option key={-1} value={-1}>
          Select
        </option>
        {options?.length > 0 ? (
          options?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))
        ) : (
          <option key={-1} value={-1}>
            Select
          </option>
        )}
      </select>
    </>
  );
}
