import React from "react";

export default function RegisterTextInput({
  label,
  onChange,
  required,
  type,
  placeholder,
  showLabel,
  widthStyle,
  textCenter,
}) {
  return (
    <div style={{ marginBottom: "1rem" }} className=" form-group">
      {showLabel && (
        <label
          style={{ color: "black" }}
          className={`${textCenter && "text-center"} labelCol`}
        >
          {label}
        </label>
      )}
      <div
        style={{
          width: widthStyle ? widthStyle : "100%",

          margin: textCenter ? "0 auto" : "0",
        }}
        className="input-group"
      >
        <input
          name="dzName"
          required={required}
          className={`form-control borderRadiusText ${
            textCenter && "inputTextCenter"
          }`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
