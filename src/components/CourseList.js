// import React from "react";
// import courseCard from "./courseData";
// import { useSelector } from "react-redux";

// function CourseList() {
//   const filters = useSelector((state) => state.filters);
//   const filteredCourses = courseData.filter((course) => {
//     return (
//       (!filters.format.classroom || course.format === "Classroom") &&
//       (!filters.format.online || course.format === "Online") &&
//       (!filters.venue.amsterdam || course.venue === "Amsterdam") &&
//       (!filters.venue.barcelona || course.venue === "Barcelona")
//       // Continue with other filter categories...
//     );
//   });

//   const courses = [
//     {
//       id: 1,
//       title: "Best Practices in Multishift Operations",
//       date: "08-12 Jan 2024",
//       price: "$5,000",
//     },
//     // Add more course data here
//   ];

//   return (
//     <div className="flex-1 p-4">
//       <div className="flex justify-between mb-4">
//         <input
//           type="text"
//           placeholder="Search Courses"
//           className="border rounded px-4 py-2 w-full max-w-xs"
//         />
//         <select className="border rounded px-4 py-2">
//           <option>Order by date</option>
//           {/* Add more sorting options here */}
//         </select>
//       </div>
//       <div>
//         {filteredCourses.map((course, index) => (
//           <div
//             key={index}
//             className="course-item"
//           >
//             {/* Render course information */}
//             <h5>{course.title}</h5>
//             <p>{course.venue}</p>
//             {/* More course details... */}
//           </div>
//         ))}
//       </div>
//       {/* Add pagination controls */}
//     </div>
//   );
// }

// export default CourseList;

// src/components/CourseList.js

import React from "react";
import { useSelector } from "react-redux";
import courseData from "./courseData"; // Import the dummy data array

const CourseList = () => {
  const filters = useSelector((state) => state.filters);

  // Filtering courses based on the Redux filter state
  const filteredCourses = courseData.filter((course) => {
    return (
      // Format filter
      (!filters.format.classroom || course.format === "Classroom") &&
      (!filters.format.online || course.format === "Online") &&
      // Venue filter
      (!filters.venue.amsterdam || course.venue === "Amsterdam") &&
      (!filters.venue.barcelona || course.venue === "Barcelona") &&
      // Month filter
      (!filters.month.january || course.month === "January") &&
      (!filters.month.february || course.month === "February") &&
      // Year filter
      (!filters.year["2024"] || course.year === 2024) &&
      (!filters.year["2025"] || course.year === 2025) &&
      // Certificate filter
      (!filters.certificate.PMI || course.certificate === "PMI") &&
      (!filters.certificate.CPD || course.certificate === "CPD") &&
      // Duration filter
      (!filters.duration.fiveDays || course.duration === "5 Days") &&
      (!filters.duration.tenDays || course.duration === "10 Days")
    );
  });

  return (
    <div>
      <h2>Available Courses</h2>
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <div
            key={course.id}
            className="course-item"
          >
            <h4>{course.title}</h4>
            <p>
              <strong>Format:</strong> {course.format}
            </p>
            <p>
              <strong>Venue:</strong> {course.venue}
            </p>
            <p>
              <strong>Date:</strong> {course.date}
            </p>
            <p>
              <strong>Certificate:</strong> {course.certificate}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Price:</strong> ${course.price.toLocaleString()}
            </p>
            <hr />
          </div>
        ))
      ) : (
        <p>No courses match the selected filters.</p>
      )}
    </div>
  );
};

export default CourseList;
