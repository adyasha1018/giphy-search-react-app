import React from "react";

const SearchBarComponent = (props) => (
  <div>
    <input
      className="search-giphy"
      placeholder="Enter text for giphy"
      onChange={(e) => props.onInputTextChange(e.target.value)}
    />
  </div>
);
export default SearchBarComponent;
