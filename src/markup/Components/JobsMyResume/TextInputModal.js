import React from "react";

export default function TextInputModal({ label, onChange, type, placeholder }) {
  return (
    <>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
