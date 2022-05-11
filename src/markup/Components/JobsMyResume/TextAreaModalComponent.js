import React from "react";

export default function TextAreaModalComponent({
  onChange,
  placeholder,
  value,
  maxLength,
}) {
  return (
    <>
      <textarea
        maxLength={maxLength}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
}
