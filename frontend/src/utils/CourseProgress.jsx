import React from "react";
import { IoMdFlame } from "react-icons/io";

const CourseProgress = () => {
  return (
    <div className="flex items-center justify-between">
      {/* under div will repeat by maping */}

      <div className="flex items-center justify-start gap-3">
        <IoMdFlame />
        <p>Development</p>
      </div>
      <div className="flex items-center justify-start">
        <p>2333</p>
        <progress
          className="progress progress-primary w-56"
          value="70"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default CourseProgress;
