import { useLoaderData, useParams } from "react-router-dom";
import { VideoCard } from "./VideoCard";
import FirstSection from "./FirstSection";

const CourseDetails = () => {
  const coursesDetails = useLoaderData();

  const { id } = useParams();
  const courseId = parseInt(id);
  const singleCourse = coursesDetails.find((data) => data.id === courseId);
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
      </div>
    </div>
  );
};

export default CourseDetails;
