import React from "react";

export default function TextInputModal({
  label,
  onChange,
  type,
  placeholder,
  min,
  max,
  value,
  disabled,
}) {
  return (
    <>
      <input
        disabled={disabled}
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        max={max}
        value={value}
      />
    </>
  );
}
