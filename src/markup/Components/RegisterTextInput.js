import React from "react";

export default function RegisterTextInput({
  label,
  onChange,
  required,
  type,
  placeholder,
  showLabel,
}) {
  return (
    <div style={{ marginBottom: "1rem" }} className="form-group">
      {showLabel && (
        <label style={{ color: "black" }} className="labelCol">
          {label}
        </label>
      )}
      <div className="input-group">
        <input
          name="dzName"
          required={required}
          className="form-control borderRadiusText "
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
