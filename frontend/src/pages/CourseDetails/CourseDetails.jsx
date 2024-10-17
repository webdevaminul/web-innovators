import { useParams } from "react-router-dom";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import VideoCard from "./VideoCard";
import Instructor from "./Instructor";
import useAvailableCourse from "../../api/useAvailableCourse";

const CourseDetails = () => {
  const {courses} = useAvailableCourse()
  console.table(courses);

  const { id } = useParams();
  const singleCourse = courses?.find((data) => data._id === id);
  console.log(singleCourse);
  return (
    <div className="heading py-4 md:py-8 px-5">
      <div className="container mx-auto">
        {/* video card for small device */}
        <div className="md:hidden block pt-5 mb-4">
          <VideoCard />
        </div>
        {/* first section for details page */}
        <FirstSection singleCourse={singleCourse} />

        {/* second section for detail page */}
        <SecondSection />

        {/* Instructor details */}
        <Instructor singleCourse={singleCourse} />
      </div>
    </div>
  );
};

export default CourseDetails;
