import React from "react";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="my-auto mr-5">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
}