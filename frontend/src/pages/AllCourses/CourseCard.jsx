
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  
  const baseUrl = axiosInstance.defaults.baseURL;
  return (
    <Link
      to={`/course-details/${course._id}`}
      className="card card-compact border border-border bg-accentOne"
    >
      <figure>
        <img src={`${baseUrl}${course?.coverPicture}`}alt={course.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <span className="text-sm"> Category : {course.category}</span>
        <p>{course.name}</p>

        <div>
          <p className="flex justify-start items-center text-xl text-secondary">
            <FaBangladeshiTakaSign />
            {course.price}
            <span className="line-through text-text flex justify-start items-center ml-2 text-base">
              <FaBangladeshiTakaSign />
              {course.oldPrice}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
CourseCard.propTypes = {
  course : PropTypes.object
}
export default CourseCard;
