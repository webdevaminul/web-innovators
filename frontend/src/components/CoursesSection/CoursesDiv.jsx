import Loader from "../../utils/Loader";
import useAllCourse from "../../api/useAllCourse";
import CourseCard from "../../pages/AllCourses/CourseCard";

const CoursesDiv = () => {
  const status = "approved";
  const { courses, isLoading } = useAllCourse({ status });
  console.log("course ", courses);
  // Limit to showing only the first 6 courses
  const displayedCourses = courses?.slice(0, 4);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {displayedCourses?.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CoursesDiv;
