import React from "react";

function Kuchtohai() {
  const styling =
    "text-gray-500 text-base leading-trim tracking-wide font-medium p-2 border-b-2 border-transparent transition-all duration-300 hover:border-blue-950 hover:text-blue-950 font-bold";
  return (
    <div className="w-full flex justify-center">
      <nav className="flex items-center gap-10">
        <a href="#" className={styling}>
          Study
        </a>
        <a href="#" className={styling}>
          Quiz
        </a>
        <a href="#" className={styling}>
          Test
        </a>
        <a href="#" className={styling}>
          Game
        </a>
        <a href="#" className={styling}>
          Others
        </a>
      </nav>
    </div>
  );
}

export default Kuchtohai;
