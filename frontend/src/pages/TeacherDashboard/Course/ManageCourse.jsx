import { useState } from "react";
import { Link } from "react-router-dom";
import { MdBlock } from "react-icons/md";
import { FaRegEye, FaRegPenToSquare } from "react-icons/fa6";
import useAllCourse from "../../../api/useAllCourse";
import Loader from "../../../utils/Loader";
import UpdateCourse from "../../../components/CrudOperation/UpdateCourse";
import { handleDeleteItem } from "../../../utils/handleDeleteItem";
import useEnrolledCourse from "../../../api/useEnrolledCourse";

const ManageCourse = () => {
  const status = "approved";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { courses, isLoading, refetch } = useAllCourse({ status });
  const { enrolledCourses, isLoading: enrollLoading } = useEnrolledCourse();

const matchId1 = courses?.filter(course => course._id )
console.log('match id',matchId1)

  console.log(enrolledCourses, 'enrolledCourses');
  console.log(courses, 'Courses');

  const handleDeleteCourse = (id) => handleDeleteItem("/course/delete", id, refetch);

  const handleUpdateCourse = async (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    refetch();
  };


  if (isLoading || enrollLoading) return <Loader />;
  if (!courses?.length) return <p className="flex justify-center items-center h-screen">No Data available</p>;

  return (
    <div className="overflow-x-auto w-full px-2 py-5">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-backgroundPrimary/10">
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Name
              </th>
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Category
              </th>
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Price
              </th>
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Students
              </th>
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Status
              </th>
              <th className="py-4 pr-6 text-left text-text uppercase font-normal">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-backgroundPrimary overflow-x-auto">
            {courses?.map((course) => (
              <tr key={course._id}>
                <td className="flex items-center gap-5">
                  <span className="avatar">
                    <span className="mask mask-squircle h-12 w-12">
                      <img
                        src={course?.coverPicture}
                        alt={course.title}
                      />
                    </span>
                  </span>
                  <span className="text-text" >{course.title}</span>
                </td>
                <td className=" text-text truncate">{course.category}</td>
                <td className=" text-text"> {course.price} </td>
                <td className=" text-text"> students </td>
                <td className=" text-text">{course.status}</td>
                <td className="py-4 px-6  text-text border-gray-200 flex gap-5">
                  <Link
                    to={`/course-details/${course._id}`}
                    className="text-text rounded-full tooltip"
                    data-tip="View Details"
                  >
                    <FaRegEye className="w-5 h-5 hover:scale-125" />
                  </Link>
                  <button onClick={() => handleUpdateCourse(course)}
                    className="text-text rounded-full text-xs tooltip"
                    data-tip="Update"
                  >
                    <FaRegPenToSquare className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course._id)}
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

export default ManageCourse;
