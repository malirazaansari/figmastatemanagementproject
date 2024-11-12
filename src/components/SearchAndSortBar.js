import React, { useState } from "react";

const SearchAndSortBar = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSort = () => {
    onSort();
  };

  return (
    <div className="flex items-center justify-between p-4 ml-7 w-auto">
      <div className="flex items-center bg-white rounded-full shadow-md  w-96 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Courses"
          className="bg-transparent w-full outline-none px-2 text-gray-600"
        />
      </div>
      <div className="border-l-2 border-gray-500 h-12"></div>

      <button
        onClick={handleSort}
        className="ml-4 flex items-center justify-center border border-purple-500 text-black-600 rounded-lg px-4 py-2 w-52 h-16 hover:bg-purple-50 transition"
      >
        Order by date
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchAndSortBar;
