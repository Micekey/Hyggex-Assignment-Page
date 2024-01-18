import React from "react";
import logo from "../assets/main-logo.svg"; // Import logo file

const Header = () => {
  const navItemStyle =
    "text-gray-700 hover:text-blue-950 transition-all duration-300";
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-28 w-28" />
      </div>

      {/* Navigation and Login on the right */}
      <div className="flex items-center space-x-6 ml-auto">
        {/* Navigation links */}
        <nav className="flex items-center space-x-9">
          <a href="#" className={navItemStyle}>
            Home
          </a>
          <a href="#" className={navItemStyle}>
            Flashcard
          </a>
          <a href="#" className={navItemStyle}>
            Contact
          </a>
          <a href="#" className={navItemStyle}>
            FAQ
          </a>
        </nav>
        <button className="bg-gradient-to-r from-blue-800 to-blue-500 rounded-3xl px-8 py-2 text-white hover:bg-blue-600">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
