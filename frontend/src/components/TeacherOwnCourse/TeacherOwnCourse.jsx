
import useAllCourse from "../../api/useAllCourse";
import Loader from "../../utils/Loader";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const TeacherOwnCourse = () => {
  const { courses, isLoading ,refetch} = useAllCourse();
  const navigate = useNavigate()
  // TODO :- NEED TO POPULAR COURSE BY RATING
  
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
                        <img
                          src={c?.coverPicture}
                          alt={c.title}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                {c.title}
                </td>
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
                  <button
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
    </div>
  );
};

export default TeacherOwnCourse;
