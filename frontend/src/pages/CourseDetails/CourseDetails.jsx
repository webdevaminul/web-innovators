import { useParams } from "react-router-dom";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import VideoCard from "./VideoCard";
import Instructor from "./Instructor";
import Loader from "../../utils/Loader";
import useAllCourse from "../../api/useAllCourse";

const CourseDetails = () => {
  const { courses, isLoading } = useAllCourse();
  console.log(courses);
  const { id } = useParams();

  console.log("id", id);
  const singleCourse = courses?.find((data) => data._id === id);
  console.log("singleCourse", singleCourse);

  if (isLoading) return <Loader />;

  return (
    <div className="heading py-4 md:py-8 px-5">
      <div className="container mx-auto">
        {/* Video card for small devices */}
        <div className="md:hidden block pt-5 mb-4">
          <VideoCard />
        </div>

        {/* First section for details page */}
        <FirstSection singleCourse={singleCourse} />

        {/* Second section for details page */}
        <SecondSection />

        {/* Instructor details */}
        <Instructor singleCourse={singleCourse} />
      </div>
    </div>
  );
};

export default CourseDetails;
