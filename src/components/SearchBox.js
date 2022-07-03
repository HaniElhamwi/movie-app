import React, { useRef } from "react";
// import "SearchBox.css";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="searchHolder">
      <input
        className="searchInput"
        placeholder="type to search"
        type="search"
        onChange={(event) => {
          props.searchValue(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
