import React, { useState } from "react";
import VideoCard from "./VideoCard";
import EnrollModal from "./EnrollModal";

const FirstSection = ({ singleCourse }) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = (val) => {
    setShowModal(val);
  };
  return (
    <div className="md:flex md:items-center justify-between gap-7">
      {/* course heading and description here  */}
      <div className="lg:w-3/5">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          {singleCourse.title}
        </h1>
        <p className="text-sm">
          For those of you participating in the HSC 2026 exams from the Science,
          Commerce, or Humanities streams, you surely need comprehensive
          preparation in five subjects outside of your main stream subjects,
          right? Often, while focusing on the core subjects, we tend to overlook
          these important subjects. So, keeping your needs in mind, Ten Minute
          School has brought a complete course for five subjects, including both
          Bangla and English papers, as well as ICT, in the “HSC 2026 Online
          Batch (BEI).”
        </p>
        <div className="mt-2">
          <div className="flex items-center gap-3">
            <h1 className="font-bold font-bai text-xl text-secondary">৳5850</h1>
            <del className="font-medium text-text font-bai text-xl">৳7500</del>
          </div>
          {/* enroll button for sm device */}
          <button
            className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 outline-none md:hidden"
            onClick={() => modalHandler(true)}
          >
            Enroll Now
          </button>

          {/* modal div */}
          <EnrollModal showModal={showModal} modalHandler={modalHandler} />
        </div>
      </div>

      {/* Right side video and enroll button card for mid to large device */}
      <div className="lg:w-2/5 w-[330px] hidden md:block">
        <div className="w-full">
          <VideoCard />
        </div>
        <button
          className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-3 px-3 w-full outline-none"
          onClick={() => modalHandler(true)}
        >
          Enroll Now
        </button>
        {/* modal div */}
        <EnrollModal showModal={showModal} modalHandler={modalHandler} />
      </div>
    </div>
  );
};

export default FirstSection;
