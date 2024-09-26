import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.title}</h2>
          <p>{course.instructor}</p>

          <div>
            <p className="flex justify-start items-center text-xl text-secondary">
              <FaBangladeshiTakaSign />
              {course.price}
              <span className="line-through text-black flex justify-start items-center ml-2 text-base">
                <FaBangladeshiTakaSign />
                {course.old_price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
    // <div className="course-card border border-border">
    //   <div className="course-image-container">
    //     <img src={course.image} alt={course.title} className="course-image" />
    //   </div>
    //   <div className="course-info bg-accentOne">
    //     <span className="course-category font-bold text-text">
    //       {course.category}
    //     </span>
    //     <h3>{course.title}</h3>
    //     <p className="instructor">Instructor: {course.instructor}</p>
    //     <button className="enroll-button">Enroll Now</button>
    //     <div className="course-pricing">
    //       <p className="course-price text-secondary">৳ {course.price}</p>
    //       {course.old_price && (
    //         <p className="course-old-price">৳ {course.old_price}</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CourseCard;
