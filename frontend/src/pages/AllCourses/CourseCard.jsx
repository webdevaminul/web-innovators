import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  const { category, coverPicture, name, price, oldPrice, title, _id } = course;

  return (
    <Link
      to={`/course-details/${_id}`}
      className="card card-compact border border-border bg-accentOne"
    >
      <figure>
        <img src={coverPicture} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="text-sm">Category: {category}</span>
        <p>{name}</p>
        <div>
          <p className="flex justify-start items-center text-xl text-secondary">
            <FaBangladeshiTakaSign />
            {price}
            <span className="line-through text-text flex justify-start items-center ml-2 text-base">
              <FaBangladeshiTakaSign />
              {oldPrice}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object,
};

export default CourseCard;
