import axiosInstance from "../../api/axiosInstance";
import useAllCourse from "../../api/useAllCourse";
import Loader from "../../utils/Loader";
import { FaCheckCircle } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
const CourseManage = () => {
  const baseUrl = axiosInstance.defaults.baseURL;
  const { courses, isLoading } = useAllCourse();
  const handleApproved = (id) => {
    console.log("hello", id);
  };
  const handleRejected = (id) => {
    console.log("hello", id);
  };

  if (isLoading) return <Loader />;
  if (!courses?.length) return <p>No Data available</p>;

  return (
    <div className="overflow-x-auto w-full px-2 py-5">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-backgroundPrimary/10">
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">Name</th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">Category</th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">Price</th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">Status</th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-backgroundPrimary overflow-x-auto">
            {courses?.map((course) => (
              <tr key={course._id}>
                <td className="flex items-center gap-3">
                  <span className="avatar">
                    <span className="mask mask-squircle h-12 w-12">
                      <img src={`${baseUrl}${course?.coverPicture}`} alt={course.title} />
                    </span>
                  </span>
                  <span>{course.title}</span>
                </td>
                <td className="border-b truncate">{course.category}</td>
                <td className="border-b"> {course.price} </td>
                <td className="border-b">{course.status}</td>
                <td className="py-4 px-6 border-b border-gray-200 flex gap-2">
                  <span
                    onClick={() => handleApproved(course._id)}
                    className="text-text cursor-pointer rounded-full text-xs"
                  >
                    <FaCheckCircle className="w-5 h-5" />
                  </span>
                  <span
                    onClick={() => handleRejected(course._id)}
                    className="text-text cursor-pointer rounded-full text-xs"
                  >
                    <MdBlock className="w-5 h-5" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManage;
