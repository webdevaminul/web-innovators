import React from "react";
import cardImg from "/alfons-morales-YLSwjSy7stw-unsplash.jpg";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const LatestCard = () => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={cardImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-xl font-medium w-full text-ellipsis overflow-hidden whitespace-nowrap">
            New Offerings: Explore Our Freshest Courses and More Opportunities
            Coming Up Soon!
          </p>
          <p className="truncate-2-lines">
            Discover our latest offerings and explore a wide range of courses
            tailored to help you stay ahead in your career. Stay tuned for new
            additions and grab the chance to enroll in the freshest courses
            available now!
          </p>
          <div className="flex justify-evenly items-center text-lg">
            <p className="flex justify-start items-center gap-1">
              <FaEye></FaEye>0
            </p>
            <CiHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCard;
