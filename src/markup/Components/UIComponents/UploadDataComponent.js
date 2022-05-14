import React from "react";

export default function UploadDataComponent({ onChange }) {
  return (
    <div className="form-group">
      <div className="custom-file">
        <p className="m-auto align-self-center">
          <i className="fa fa-upload"></i>
          Upload Additional Supporting Documents
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
