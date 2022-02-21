import React from "react";

export default function TextAreaModalComponent({
  label,
  onChange,
  type,
  placeholder,
}) {
  return (
    <>
      <textarea
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </>
  );
}
