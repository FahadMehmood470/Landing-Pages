import React from 'react';

export default function FilterBar({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 border rounded"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
