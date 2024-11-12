import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, resetFilters } from "../redux/filterSlice";

function SidebarFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggle = (category, filter) => {
    dispatch(toggleFilter({ category, filter }));
  };

  return (
    <aside className="w-64 bg-purple-800 text-white mt-7 mb-16 ml-36 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-6 text-center">FILTER COURSES</h2>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY FORMAT</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.format.classroom}
            onChange={() => handleToggle("format", "classroom")}
          />
          Classroom
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.format.online}
            onChange={() => handleToggle("format", "online")}
          />
          Online
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY VENUE</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.venue.amsterdam}
            onChange={() => handleToggle("venue", "amsterdam")}
          />
          Amsterdam
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.venue.barcelona}
            onChange={() => handleToggle("venue", "barcelona")}
          />
          Barcelona
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY MONTH</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.month.january}
            onChange={() => handleToggle("month", "january")}
          />
          January
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.month.february}
            onChange={() => handleToggle("month", "february")}
          />
          February
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY YEAR</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.year["2024"]}
            onChange={() => handleToggle("year", "2024")}
          />
          2024
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.year["2025"]}
            onChange={() => handleToggle("year", "2025")}
          />
          2025
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY CERTIFICATE</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.certificate.PMI}
            onChange={() => handleToggle("certificate", "PMI")}
          />
          PMI Approved Training Courses
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.certificate.CPD}
            onChange={() => handleToggle("certificate", "CPD")}
          />
          CPD Certified Training Courses
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">BY DURATION</h4>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.duration.fiveDays}
            onChange={() => handleToggle("duration", "fiveDays")}
          />
          5 Days
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={filters.duration.tenDays}
            onChange={() => handleToggle("duration", "tenDays")}
          />
          10 Days
        </label>
        <hr className="border-gray-500 my-3" />
      </div>

      <button
        onClick={() => dispatch(resetFilters())}
        className="mt-4 w-full text-center bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold"
      >
        Reset Filters
      </button>
    </aside>
  );
}

export default SidebarFilter;
