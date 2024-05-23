import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = ({ handleFilter }) => {
  return (
    <div className="header_input">
      <input
        type="text"
        placeholder="search by category Ex. mern , frontend, backend, api,etc"
        onInput={(e) => handleFilter(e)}
      />
      <CiSearch size={22} color="wheat" />
    </div>
  );
};

export default SearchBar;
