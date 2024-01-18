import React from "react";
import Kuchtohai from "./Content Sub Components/Options.jsx";
import Flashcard from "./Content Sub Components/Flashcard.jsx";
import Author from "../svg-logos/Author.jsx";
import CreateCard from "../svg-logos/CreateCard.jsx";

function Content() {
  return (
    <div>
      <h2 className="font-montserrat text-2xl font-bold bg-gradient-text mb-12">
        Relations and Functions (Mathematics)
      </h2>
      <Kuchtohai />
      <Flashcard />
      <div className="mt-8 flex justify-between">
        <div>
          <Author />
        </div>
        <div className="flex items-center">
          <CreateCard />
        </div>
      </div>
    </div>
  );
}

export default Content;
