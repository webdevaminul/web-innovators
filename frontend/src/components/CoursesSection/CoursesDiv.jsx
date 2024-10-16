import { useEffect, useState } from "react";
import CourseCard from "../../pages/AllCourses/CourseCard";
import Loader from "../../utils/Loader";

const CoursesDiv = () => {
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
    return  <Loader /> ;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 my-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {displayedCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesDiv;
