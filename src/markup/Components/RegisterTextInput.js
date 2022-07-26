import React from "react";

export default function RegisterTextInput({
  label,
  onChange,
  required,
  type,
  placeholder,
}) {
  return (
    <div className="form-group">
      <label>{label}*</label>
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
