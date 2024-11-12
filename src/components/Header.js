// import React from "react";

// function Header() {
//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-md">
//       <img
//         src="logo.png"
//         alt="Logo"
//         className="h-10"
//       />
//       <nav className="flex gap-6">
//         <a
//           href="#home"
//           className="text-gray-700"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className="text-gray-700"
//         >
//           About
//         </a>
//         <a
//           href="#why-ill"
//           className="text-gray-700"
//         >
//           Why ILL
//         </a>
//         <a
//           href="#courses"
//           className="text-gray-700"
//         >
//           Courses
//         </a>
//         <a
//           href="#industries"
//           className="text-gray-700"
//         >
//           Industries
//         </a>
//         <button className="bg-purple-600 text-white px-4 py-2 rounded">
//           Contact us
//         </button>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import svg from "../assests/react.svg"; // Replace with your logo path

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={svg}
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-gray-700">
        <a
          href="/"
          className="hover:text-purple-700"
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:text-purple-700"
        >
          About
        </a>
        <a
          href="/why-ill"
          className="hover:text-purple-700"
        >
          Why ILL
        </a>
        <a
          href="/courses"
          className="hover:text-purple-700"
        >
          Courses
        </a>
        <a
          href="/industries"
          className="hover:text-purple-700"
        >
          Industries we serve
        </a>
      </nav>

      {/* Contact Button */}
      <div>
        <a
          href="/contact"
          className="bg-purple-700 text-white px-6 py-2.5 rounded-md hover:bg-purple-800"
        >
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
