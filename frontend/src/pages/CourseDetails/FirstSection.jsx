import { useState } from "react";
import useAvailableCourse from "../../api/useAvailableCourse";
import Loader from "../../utils/Loader";
import EnrollModal from "./EnrollModal";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";
const FirstSection = ({ singleCourse = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { isLoading } = useAvailableCourse();
  if (isLoading) return <Loader />;
  const { detailsCourse, price, oldPrice, title, _id } = singleCourse;

  return (
    <div className="md:flex md:items-center justify-between gap-7">
      {/* course heading and description here  */}
      <div className="lg:w-3/5">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-sm">{detailsCourse}</p>
        <div className="mt-2">
          <div className="flex items-center gap-3">
            <h1 className="font-bold font-bai text-xl text-secondary">
              ৳{price}
            </h1>
            <del className="font-medium text-text font-bai text-xl">
              ৳{oldPrice}
            </del>
          </div>
          <button
            className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 md:hidden"
            onClick={toggleModal}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Right side video and short details card for mid to large device */}
      <div className="lg:w-2/5 w-[330px] hidden md:block">
        <div className="w-full">
          <VideoCard />
        </div>
        <button
          className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 w-full"
          onClick={toggleModal}
        >
          Enroll Now
        </button>
      </div>
      {isOpen && (
        <EnrollModal
          courseTitle={title}
          courseId={_id}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};
FirstSection.propTypes = {
  singleCourse: PropTypes.object,
};
export default FirstSection;
