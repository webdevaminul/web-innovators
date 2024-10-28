import { HiOutlineUsers } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { useState } from "react";
import useAllCourse from "../../api/useAllCourse";
import Loader from "../../utils/Loader";
const TeacherOwnCourse = () => {
  const { courses, isLoading } = useAllCourse();
  const [isImageLoading, setIsImageLoading] = useState(true);

  // TODO :- NEED TO POPULAR COURSE BY RATING

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:grid grid-cols-2 gap-3">
      {courses?.slice(0, 2).map((card) => (
        <div key={card._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={card?.coverPicture}
              style={{ display: isImageLoading ? 'https://i.ibb.co/MDZYgz6/LearnUp.jpg' : 'block' }}
              alt={card.title}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {card.title} </h2>
            <p> Launch Date : {card.date} </p>
            <div className="flex justify-between space-y-2">
              <p className="flex">
                {" "}
                <BiLike className="w-5 h-5" /> {card.likes}{" "}
              </p>
              <p className="flex">
                {" "}
                <HiOutlineUsers className="w-5 h-5" /> {card.students}{" "}
              </p>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherOwnCourse;
