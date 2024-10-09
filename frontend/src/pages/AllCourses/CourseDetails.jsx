import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CourseDetails = () => {
  const coursesDetails = useLoaderData();

  const { id } = useParams();
  const courseId = parseInt(id);
  const singleCourse = coursesDetails.find((data) => data.id === courseId);
  console.log(singleCourse);
  return (
    <div>
      <h1>Course Details {singleCourse.id}</h1>
    </div>
  );
};

export default CourseDetails;
