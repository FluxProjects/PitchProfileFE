import React from "react";

export default function TextInputModal({
  label,
  onChange,
  type,
  placeholder,
  min,
  max,
  value,
  fieldHighlight,
  disabled,
}) {
  return (
    <>
      <input
        className={
          fieldHighlight == true ? "form-control borderRed" : "form-control"
        }
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        max={max}
        value={value}
      />
    </>
  );
}
