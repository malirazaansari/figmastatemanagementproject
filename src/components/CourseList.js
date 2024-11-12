import React, { useState } from "react";
import { useSelector } from "react-redux";
import courseData from "./courseData";
import SearchAndSortBar from "./SearchAndSortBar";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ITEMS_PER_PAGE = 6;

const CourseList = () => {
  const filters = useSelector((state) => state.filters);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 ml-12">
      <SearchAndSortBar
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <h2 className="text-xl font-bold mb-4">Available Courses</h2>
      {currentCourses.length > 0 ? (
        currentCourses.map((course) => (
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

      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border-purple-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
