import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function DropdownSearch({ items }) {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => (
    <>
      <span style={{ display: "block", textAlign: "left", zIndex: 100 }}>
        {item.name}
      </span>
    </>
  );

  return (
    <ReactSearchAutocomplete
      items={items}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      autoFocus
      placeholder="English"
      formatResult={formatResult}
      className="form-control"
      style={{ zIndex: 100 }}
    />
  );
}
