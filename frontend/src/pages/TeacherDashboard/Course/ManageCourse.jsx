import { MdBlock } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaRegEye, FaRegPenToSquare } from "react-icons/fa6";
import { toast } from "react-toastify";
import useAllCourse from "../../../api/useAllCourse";
import axiosInstance from "../../../api/axiosInstance";
import Loader from "../../../utils/Loader";

const ManageCourse = () => {
  const status = "approved";
  const { courses, isLoading, refetch } = useAllCourse({ status });


  const handleDeleteCourse = async (id) => {
    try {
      // Show confirmation alert before deletion
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this course !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  
      // If user confirms, proceed with deletion
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/delete/courses/${id}`);
  
        // Handle success response from the backend
        if (res.status === 200) {
          // Show success alert
          Swal.fire({
            title: "Deleted!",
            text: res.data.message,
            icon: "success",
          });
  
          // Show toast notification for deletion success
          toast.success(res.data.message || "Course deleted successfully!");
  
          // Refetch or update course list
          refetch();
        }
      }
    } catch (error) {
      // Show error toast if deletion fails
      toast.error("Failed to delete course: " + error.message);
    }
  };

  if (isLoading) return <Loader />;
  if (!courses?.length) return <p className="flex justify-center items-center h-screen">No Data available</p>;

  return (
    <div className="overflow-x-auto w-full px-2 py-5">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-backgroundPrimary/10">
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Name
              </th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Category
              </th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Price
              </th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Students
              </th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Status
              </th>
              <th className="py-4 pr-6 text-left text-text font-bold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-backgroundPrimary overflow-x-auto">
            {courses?.map((course) => (
              <tr key={course._id}>
                <td className="flex items-center gap-3">
                  <span className="avatar">
                    <span className="mask mask-squircle h-12 w-12">
                      <img
                        src={course?.coverPicture}
                        alt={course.title}
                      />
                    </span>
                  </span>
                  <span>{course.title}</span>
                </td>
                <td className="border-b truncate">{course.category}</td>
                <td className="border-b"> {course.price} </td>
                <td className="border-b"> studens </td>
                <td className="border-b">{course.status}</td>
                <td className="py-4 px-6 border-b border-gray-200 flex gap-5">
                  <Link
                    to={`/course-details/${course._id}`}
                    className="text-text rounded-full tooltip"
                    data-tip="View Details"
                  >
                    <FaRegEye className="w-5 h-5 hover:scale-125" />
                  </Link>
                  <button
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
    </div>
  );
};

export default ManageCourse;
