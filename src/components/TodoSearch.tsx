import React from "react";

interface TodoSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function TodoSearch({
  searchQuery,
  setSearchQuery,
}: TodoSearchProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search Tasks"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
      />
    </div>
  );
}
