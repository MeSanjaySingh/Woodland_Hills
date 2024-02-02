import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap gap-5 flex items-center border-b-[1px] border-black px-[1rem] py-[1.5rem]">
      <img className="w-10 h-10"
        src="https://cdn5.vectorstock.com/i/1000x1000/09/19/restaurant-location-pin-isolated-icon-design-vector-9770919.jpg"
        alt="logo"
      />
      <SearchIcon className="searchBar-icon text-[rgba(0,0,0,0.26)] mr-[2rem]" />
      <input
        className="text-[1.5rem] outline-none border-none w-screen font-[]"
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
