import React from "react";

function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.date}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{course.price}</p>
      </div>
    </div>
  );
}

export default CourseCard;
