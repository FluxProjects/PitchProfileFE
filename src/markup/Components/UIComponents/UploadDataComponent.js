import React from "react";

export default function UploadDataComponent({ onChange, text }) {
  return (
    <div className="form-group">
      <div className="custom-file">
        <p className="m-auto align-self-center">
          <i className="fa fa-upload"></i>
          {text}
        </p>
        <input
          type="file"
          className="site-button form-control"
          id="customFile"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
