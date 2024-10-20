import React, { useState } from "react";
import VideoCard from "./VideoCard";
import EnrollModal from "./EnrollModal";

const FirstSection = ({ singleCourse }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:flex md:items-center justify-between gap-7">
      {/* course heading and description here  */}
      <div className="lg:w-3/5">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          {singleCourse.title}
        </h1>
        <p className="text-sm">{/* course description */}</p>
        <div className="mt-2">
          <div className="flex items-center gap-3">
            <h1 className="font-bold font-bai text-xl text-secondary">৳5850</h1>
            <del className="font-medium text-text font-bai text-xl">৳7500</del>
          </div>
          <button
            className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 md:hidden"
            onClick={toggleModal}
          >
            Enroll Now
          </button>
          {/* modal div */}
          {isOpen && <EnrollModal toggleModal={toggleModal} />}
        </div>
      </div>

      {/* Right side video and enroll button card for mid to large device */}
      <div className="lg:w-2/5 w-[330px] hidden md:block">
        <div className="w-full">
          <VideoCard />
        </div>
        <button
          className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-3 px-3 w-full outline-none"
          onClick={toggleModal}
        >
          Enroll Now
        </button>
        {/* modal div */}
        {isOpen && <EnrollModal toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default FirstSection;
