import React from "react";

// Import the provided components
import Bulb from "../../svg-logos/Bulb";
import Speaker from "../../svg-logos/Speaker";
import Restart from "../../svg-logos/Restart";
import Full from "../../svg-logos/Full";
import LeftArrow from "../../svg-logos/LeftArrow";
import RightArrow from "../../svg-logos/RightArrow";

const FlashCard = () => {
  const content = "9 + 6 + 7x - 2x - 3";
  return (
    <>
      <div className="max-w-lg h-80 flex-shrink-0 rounded-3xl bg-gradient-to-r from-c4 to-c1 overflow-hidden mx-auto mt-5">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              {/* Use the provided Bulb component */}
              <Bulb />
            </div>
          </div>
          <div className="ml-2">
            <Speaker />
          </div>
        </div>
        <div className="eqn">
          <p className="text-white text-center font-lato text-3xl font-bold">
            {content}
          </p>
        </div>
      </div>
      <div className="p-4 mt-3 max-w-lg mx-auto flex justify-between">
        <div className="flex items-center">
          <Restart />
        </div>
        <div className="flex space-x-10">
          <LeftArrow />
          <p className="flex items-center custom-text-style">01/10</p>
          <RightArrow />
        </div>
        <div className="flex items-center">
          <Full />
        </div>
      </div>
    </>
  );
};

export default FlashCard;
