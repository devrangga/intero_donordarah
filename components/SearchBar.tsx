"use client";
import React, { useState } from "react";

const SearchBar = ({ setSearchQuery, label }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={`bg-white border-2 ${
        isFocus ? "border-primary" : "border-gray-100"
      } w-full text-gray-300 placeholder:text-gray-300 flex flex-row gap-4 items-center px-8 py-4 rounded-2xl`}
    >
      <i className="ri-search-2-line text-3xl"></i>
      <input
        placeholder={label}
        className="text-gray-500 text-xl outline-none w-full h-full"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
