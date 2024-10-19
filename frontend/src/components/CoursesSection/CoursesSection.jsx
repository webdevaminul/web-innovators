import { useEffect, useState } from "react";
import Title from "../../utils/Title";
import Loader from "../../utils/Loader";
import CourseCard from "../../pages/AllCourses/CourseCard";

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./courses.json") // Ensure your data file is at the correct path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Limit to showing only the first 6 courses
  const displayedCourses = courses.slice(0, 4);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500 my-10">Error: {error.message}</div>;
  }
  return (
    <section className="p-2 md:p-4 lg:p-5">
      <Title
        title={"Latest Courses"}
        subTitle={"Explore the newest courses and stay ahead with the latest trends"}
      />
      <div className="grid gap-4 grid-cols-4">
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
