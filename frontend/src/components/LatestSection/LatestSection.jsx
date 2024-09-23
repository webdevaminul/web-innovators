import React from "react";
import LatestCard from "./LatestCard/LatestCard";

const LatestSection = () => {
  const cards = [1, 2, 3, 4];
  return (
    <>
      <div className="px-6 mb-10 mt-6">
        <h1 className="text-xl font-medium mb-9 text-center md:text-start">
          Latest Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <LatestCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestSection;
