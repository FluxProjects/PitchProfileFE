import React from "react";

export default function TextAreaModalComponent({
  onChange,
  placeholder,
  value,
}) {
  return (
    <>
      <textarea
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
}
