import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="card card-compact border border-border bg-accentOne">
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
              <span className="line-through text-text flex justify-start items-center ml-2 text-base">
                <FaBangladeshiTakaSign />
                {course.old_price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
