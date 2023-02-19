import React from "react";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="my-auto md:mr-5 mr-3">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-72 md:w-48 w-32 lg:p-2.5 md:p-1.5 p-1"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
}