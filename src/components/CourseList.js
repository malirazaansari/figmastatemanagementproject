import React, { useState } from "react";
import { useSelector } from "react-redux";
import courseData from "./courseData";
import SearchAndSortBar from "./SearchAndSortBar";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const CourseList = () => {
  const filters = useSelector((state) => state.filters);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());
  const handleSort = () => setSortByDate(!sortByDate);

  const filteredCourses = courseData
    .filter((course) => {
      const matchesFilters =
        (!filters.format.classroom || course.format === "Classroom") &&
        (!filters.format.online || course.format === "Online") &&
        (!filters.venue.amsterdam || course.venue === "Amsterdam") &&
        (!filters.venue.barcelona || course.venue === "Barcelona") &&
        (!filters.month.january || course.month === "January") &&
        (!filters.month.february || course.month === "February") &&
        (!filters.year["2024"] || course.year === 2024) &&
        (!filters.year["2025"] || course.year === 2025) &&
        (!filters.certificate.PMI || course.certificate === "PMI") &&
        (!filters.certificate.CPD || course.certificate === "CPD") &&
        (!filters.duration.fiveDays || course.duration === "5 Days") &&
        (!filters.duration.tenDays || course.duration === "10 Days");

      const matchesSearch = course.title.toLowerCase().includes(searchTerm);

      return matchesFilters && matchesSearch;
    })
    .sort((a, b) => {
      if (sortByDate) {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  return (
    <div className="p-4">
      <SearchAndSortBar
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <h2 className="text-xl font-bold mb-4">Available Courses</h2>
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4 border hover:border-blue-500 transition-all duration-300"
          >
            <div>
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-purple-600">
                {course.venue.split("-").join(", ")}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm font-semibold">{course.date}</p>
              <div className="border-l-2 border-gray-300 h-6"></div>
              <p className="text-lg font-semibold text-black">
                ${course.price.toLocaleString()}
              </p>
              <button className="ml-4 p-2 text-gray-700 hover:text-gray-900">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No courses match the selected filters.</p>
      )}
    </div>
  );
};

export default CourseList;
