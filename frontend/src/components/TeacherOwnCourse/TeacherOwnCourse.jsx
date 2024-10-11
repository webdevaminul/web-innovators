import { HiOutlineUsers } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
const TeacherOwnCourse = () => {
  const data = [
    {
      id: 1,
      title: "When Is the Best Time to Take an Education Course?",
      date: "April 23",
      likes: 230,
      duration: "12 Months",
      professor: "Jack Ronan",
      students: 120,
      image: "https://edumin.scriptlelo.com/vue/demo/assets/pic1-B0IMFwKb.jpg", // Replace with actual image URLs
      icon: "FaUserGraduate",
    },
    {
      id: 2,
      title: "Education Courses: A Guide to Unlocking Your Potential",
      date: "April 23",
      likes: 450,
      duration: "12 Months",
      professor: "Jimmy Morris",
      students: 120,
      image: "https://edumin.scriptlelo.com/vue/demo/assets/pic1-B0IMFwKb.jpg", // Replace with actual image URLs
      icon: "FaUserGraduate",
    },
    {
      id: 3,
      title: "A Comprehensive Guide to Taking an Education Course",
      date: "April 23",
      likes: 120,
      duration: "12 Months",
      professor: "Konne Backfield",
      students: 120,
      image: "https://edumin.scriptlelo.com/vue/demo/assets/pic1-B0IMFwKb.jpg", // Replace with actual image URLs
      icon: "FaUserGraduate",
    },
    {
      id: 4,
      title: "Why Should You Consider Taking an Education Course?",
      date: "April 23",
      likes: 275,
      duration: "12 Months",
      professor: "Nashid Martines",
      students: 120,
      image: "https://edumin.scriptlelo.com/vue/demo/assets/pic1-B0IMFwKb.jpg", // Replace with actual image URLs
      icon: "FaUserGraduate",
    },
  ];

  return (
    <div className="md:grid grid-cols-2 gap-3">
      {data?.map(card => <div key={card.id} className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={card.image}
            alt={card.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {card.title} </h2>
          <p> Launch Date : {card.date} </p>
          <div className="flex justify-between space-y-2">
            <p className="flex"> <BiLike className="w-5 h-5" /> {card.likes} </p>
            <p className="flex"> <HiOutlineUsers className="w-5 h-5" /> {card.students} </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default TeacherOwnCourse;
