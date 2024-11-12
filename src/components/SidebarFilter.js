import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../redux/filterSlice";
import { resetFilters } from "../redux/filterSlice";

function SidebarFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggle = (category, filter) => {
    dispatch(toggleFilter({ category, filter }));
  };

  return (
    <aside className="w-64 bg-purple-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Filter Courses</h2>
      <div>
        <h4>By Format</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.format.classroom}
            onChange={() => handleToggle("format", "classroom")}
          />
          Classroom
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.format.online}
            onChange={() => handleToggle("format", "online")}
          />
          Online
        </label>

        <h4>By Venue</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.venue.amsterdam}
            onChange={() => handleToggle("venue", "amsterdam")}
          />
          Amsterdam
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.venue.barcelona}
            onChange={() => handleToggle("venue", "barcelona")}
          />
          Barcelona
        </label>

        {/* Repeat for other filter categories */}
      </div>
      <button onClick={() => dispatch(resetFilters())}>Reset Filters</button>
    </aside>
  );
}

export default SidebarFilter;
