import React from "react";
import svg from "../assests/react.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      <div className="flex items-center">
        <img
          src={svg}
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
      </div>

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
