import React from "react";

export default function TextAreaModalComponent({ onChange, placeholder }) {
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
