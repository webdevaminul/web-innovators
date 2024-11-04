
import { useState } from "react";
import { Link} from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAllCourse from "../../api/useAllCourse";
import Loader from "../../utils/Loader";
import UpdateCourse from "../../components/CrudOperation/UpdateCourse";
import { handleDeleteItem } from "../../utils/handleDeleteItem";

const TeacherOwnCourse = () => {
  const status = "approved";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { courses, isLoading, refetch } = useAllCourse({ status });

  // TODO :- NEED TO POPULAR COURSE BY RATING

  // update course details
  const handleUpdateCourse = async (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    refetch();
  };

  // Delete course handler, passing refetch to handleDeleteItem
  const handleDeleteCourse = (id) => handleDeleteItem("/course/delete", id, refetch);

  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="flex justify-between flex-row items-center my-10">
        <h1 className="text-3xl font-extrabold">Popular Courses</h1>
      </div>

      <div className="overflow-x-auto text-text">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Title</th>
              <th>Students</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses?.slice(0, 5).map((c) => (
              <tr key={c._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={c?.coverPicture} alt={c.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{c.title}</td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">{c.category}</button>
                </th>
                <td className="py-4 px-6 border-b border-gray-200 flex gap-5">
                  <Link
                    to={`/course-details/${c._id}`}
                    className="text-text rounded-full tooltip"
                    data-tip="View Details"
                  >
                    <FaRegEye className="w-5 h-5 hover:scale-125" />
                  </Link>
                  <button onClick={()=>handleUpdateCourse(c)}
                    className="text-text rounded-full text-xs tooltip"
                    data-tip="Update"
                  >
                    <FaRegPenToSquare className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(c._id)}
                    className="text-text rounded-full tooltip"
                    data-tip="Delete"
                  >
                    <MdBlock className="w-5 h-5 hover:scale-125" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateCourse isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} courseData={selectedCourse} onClose={closeModal} />
    </div>
  );
};

export default TeacherOwnCourse;
